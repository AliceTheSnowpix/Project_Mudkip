const Discord = require('discord.js')
const jokes = require('../assets/jokes.json')

exports.run = async (bot, message, args) => {
    args = args.join(" ");

    let jokesembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(`${jokes[Math.floor(Math.random() * jokes.length)]}`)

    message.channel.send(jokesembed)
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name:'joke'
}
