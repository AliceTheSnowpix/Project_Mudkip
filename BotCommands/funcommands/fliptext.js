const flipText = require('../assets/flipText.json');

exports.run = async (bot, message, args) => {
    if (args.length < 1) return message.reply('**You must provide text to flip!**');

    args = args.join(' ');
    for (let i = 0; i < Object.keys(flipText).length; i++) {
        args.replace(Object.keys(flipText)[i], flipText[Object.keys(flipText)[i]]);
    }

    let ftembed = new bot.discord.MessageEmbed()
    .setColor("#f3ff77")
    .setTitle("Fliped Texted")
    .setDescription(args.split('').reverse().join(''));
    message.channel.send(ftembed);
}

exports.help = {
    name: 'fliptext',
    aliases: ['flip']
}
