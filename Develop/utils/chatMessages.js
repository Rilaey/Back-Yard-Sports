const moment = require('moment');

function formatMessage (chatUsername, text) {
    return {
        chatUsername,
        text,
        time: moment().format('h:mma:')
    }
}

module.exports = formatMessage;