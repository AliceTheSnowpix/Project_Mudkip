const question = require('./assets/wouldYouRather.json');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let wouldembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(question[Math.floor(Math.random() * question.length)])

  message.channel.send(wouldembed)

};

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'wouldyourather',
};