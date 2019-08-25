const quotes = require('../assets/quotes.json')

exports.run = async (bot, message, args) => {
    const Discord =  bot.discord;
    let quotesembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(`${quotes[Math.floor(Math.random() * quotes.length)]}`)
    message.channel.send(quotesembed);
}

exports.help = {
    name:'quote'
}