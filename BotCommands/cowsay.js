const cowsay = require('cowsay');

exports.run = (bot, message, args) => {

    message.delete()
 
    let txt = message.content.split(' ').slice(1).join(' ');
    if (!txt) {
        return message.reply('Invalid arguments, what do you want the cow to say?');
    }

    message.channel.send(cowsay.say({
        text: txt,
        e: 'oO'
    }), {code: 'css'});
};

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: 'cowsay'
};