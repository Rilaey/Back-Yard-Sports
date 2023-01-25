const socket = io();
const form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const chatUsername = 'Potato';


const teamRoom = 'Blades Of Glory';
// const { chatUsername, teamRoom } = Qs.parse(location.search, {
//     ignoreQueryPrefix: true
// });

socket.emit('joinRoom', { chatUsername, teamRoom});

socket.on('roomUsers', ({ teamRoom, users }) => {
    outputRoomName(teamRoom);
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

socket.on('chat message', function(msg) {
    var item = document.createElement('div');
    item.classList.add('msg');
    item.innerHTML = `<ul id='chat-message'><li>${msg.chatUsername}<span>${msg.time}</span><p class="text">${msg.text}</li></ul>`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    console.log(msg);
});

function outputRoomName(teamRoom) {
    roomName.innerText = teamRoom;
}

function outputUsers(users) {
    userList.innerHTML = `${users.map(user => `<li>${user.chatUsername}</li>`).join('')}`;
}