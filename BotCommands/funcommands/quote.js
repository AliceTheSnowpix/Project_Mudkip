const Discord = require('discord.js')
const quotes = require('../assets/quotes.json')

exports.run = async (bot, message, args) => {
    args = args.join(" ");

    let quotesembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(`${quotes[Math.floor(Math.random() * quotes.length)]}`)

    message.channel.send(quotesembed)
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name:'quote'
}
