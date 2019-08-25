const cowsay = require('cowsay');

exports.run = (bot, message, args) => {
    if (!args.join(' ')) return message.reply('Invalid arguments, what do you want the cow to say?');
    message.channel.send(cowsay.say({
        text: txt,
        e: 'oO'
    }), {code: 'css'});
};

exports.help = {
    name: 'cowsay'
};
