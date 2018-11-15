const copypastas = require('./assets/copypastas.json');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    args = args.join(" ");

    let copyembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`)

    message.channel.send(copyembed)
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'copypaste'
}