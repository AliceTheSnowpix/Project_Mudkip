const question = require('../assets/thisOrThat.json');

exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
  let thisembed = new Discord.RichEmbed()
  .setColor("#f99d9d")
  .setDescription(question[Math.floor(Math.random() * question.length)])
  message.channel.send(thisembed);
}

exports.help = {
  name: 'thisorthat'
}