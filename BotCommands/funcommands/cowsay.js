const cowsay = require('cowsay2');

exports.run = (_bot, message, args) => {
    let cows = require('cowsay2/cows');
    let options = args[0];
    let text1 = args.join(' ').slice(options.length + 1);
    let text2 = args.join(' ');
    if (options === '--whale') {
        if (!text1) return message.reply('Invalid arguments, what do you want the cow to say?');
        message.channel.send(cowsay.say(text1, {
            cow: cows.whale,
            e: 'oO'
        }), {code: 'css'});
    } else if (options === '--dragon') {
        if (!text1) return message.reply('Invalid arguments, what do you want the cow to say?');
        message.channel.send(cowsay.say(text1, {
            cow: cows.dragon,
            e: '^^'
        }), {code: 'css'});
    } else if (options === '--dragon2') {
        if (!text1) return message.reply('Invalid arguments, what do you want the cow to say?');
        message.channel.send(cowsay.say(text1, {
            cow: cows.charizardvice,
            e: '^^'
        }), {code: 'css'});
    } else {
        if (!text2) return message.reply('Invalid arguments, what do you want the cow to say?');
        message.channel.send(cowsay.say(text2, {
            e: 'oO'
        }), {code: 'css'});
    }
}

exports.help = {
    name: 'cowsay'
};
