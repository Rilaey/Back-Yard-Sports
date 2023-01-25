const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers')
cardMiddleware = require('./utils/card');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

const formatMessage = require('./utils/chatMessages');  //Socket.io requirement
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/chatUsers');  //Socket.io requirement

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    credentials: true
  },
});

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(cardMiddleware);

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

io.on('connection', (socket) => { //Socket.io requirement
  socket.on('joinRoom', ({ username, room}) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
    socket.emit('chat message', formatMessage('CHAT BOT', `WELCOME TO ${user.room}`));
    socket.broadcast.to(user.room).emit('chat message', formatMessage('CHAT BOT', `${user.username} HAS JOINED`));
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });
  
  socket.on('chat message', msg => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('chat message', formatMessage(user.username, msg));
  });

  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit('chat message', formatMessage('CHAT BOT', `${user.username} HAS LEFT`));
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});

sequelize.sync({ force: false }).then(() => {
  httpServer.listen(PORT, () => console.log('Now listening on local host!'));
});