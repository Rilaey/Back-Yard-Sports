const users = [];

function userJoin (id, chatUsername, teamRoom) {
    const user = { id, chatUsername, teamRoom };
    users.push(user);
    return user;
}

function getCurrentUser (id) {
    return users.find(user => user.id === id);
}

function userLeave (id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

function getRoomUsers (teamRoom) {
    return users.filter(user => user.teamRoom === teamRoom);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};