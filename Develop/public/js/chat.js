const socket = io();
const form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

socket.emit('joinRoom', { username, room});

socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        console.log(input.value);
        socket.emit('chat message', input.value);
        input.value = '';
        input.focus();
    }
});

/*socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    console.log(msg);
});*/

socket.on('chat message', function(msg) {
    var item = document.createElement('div');
    item.classList.add('msg');
    item.innerHTML = `<p class="meta">${msg.username}<span>${msg.time}</span></p><p class="text">${msg.text}</p>`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    console.log(msg);
});

function outputRoomName(room) {
    roomName.innerText = room;
}

function outputUsers(users) {
    userList.innerHTML = `${users.map(user => `<li>${user.username}</li>`).join('')}`;
}