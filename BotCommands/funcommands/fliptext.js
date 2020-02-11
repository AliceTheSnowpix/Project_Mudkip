const flipText = require('../assets/flipText.json');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    if (args.length < 1) return message.reply('**You must provide text to flip!**');

    args = args.join(' ');
    for (let i = 0; i < Object.keys(flipText).length; i++) {
        args.replace(Object.keys(flipText)[i], flipText[Object.keys(flipText)[i]]);
    }

    let ftembed = new Discord.RichEmbed()
    .setColor("#f3ff77")
    .setTitle("Fliped Texted")
    .setDescription(args.split('').reverse().join(''));
    message.channel.send(ftembed);
}

exports.help = {
    name: 'fliptext',
    aliases: ['flip']
}
