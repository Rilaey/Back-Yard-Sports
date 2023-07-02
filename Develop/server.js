const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
//cardMiddleware = require('./utils/card');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

const formatMessage = require('./utils/chatMessages'); //Socket.io requirement
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require('./utils/chatUsers'); //Socket.io requirement

const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    credentials: true,
  },
});

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: null,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
//app.use(cardMiddleware);

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

io.on('connection', (socket) => {
  //Socket.io requirement
  socket.on('joinRoom', ({ chatUsername, teamRoom }) => {
    const user = userJoin(socket.id, chatUsername, teamRoom);
    socket.join(user.teamRoom);
    socket.emit(
      'chat message',
      formatMessage('CHATBOT\n', `WELCOME TO ${user.teamRoom}`)
    );
    socket.broadcast
      .to(user.teamRoom)
      .emit(
        'chat message',
        formatMessage('CHATBOT\n', `${user.chatUsername} HAS JOINED`)
      );
    io.to(user.teamRoom).emit('roomUsers', {
      teamRoom: user.teamRoom,
      users: getRoomUsers(user.teamRoom),
    });
  });

  socket.on('chat message', (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.teamRoom).emit(
      'chat message',
      formatMessage(user.chatUsername + '\n', msg)
    );
  });

  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.teamRoom).emit(
        'chat message',
        formatMessage('CHATBOT\n', `${user.chatUsername} HAS LEFT`)
      );
      io.to(user.teamRoom).emit('roomUsers', {
        teamRoom: user.teamRoom,
        users: getRoomUsers(user.teamRoom),
      });
    }
  });
});

sequelize.sync({ force: false }).then(() => {
  httpServer.listen(PORT, () => console.log('Now listening on local host!'));
});
