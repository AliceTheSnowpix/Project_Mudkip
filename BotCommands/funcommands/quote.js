const quotes = require('../assets/quotes.json')

exports.run = async (bot, message, _args) => {
    let quotesembed = new bot.discord.MessageEmbed()
    .setColor("#f99d9d")
    .setDescription(`${quotes[Math.floor(Math.random() * quotes.length)]}`);
    message.channel.send(quotesembed);
}

exports.help = {
    name:'quote'
}