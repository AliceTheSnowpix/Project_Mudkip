const question = require('../assets/thisOrThat.json');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let thisembed = new Discord.RichEmbed()
.setColor("#f99d9d")
.setDescription(question[Math.floor(Math.random() * question.length)])

  message.channel.send(thisembed)

}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'thisorthat'
}
