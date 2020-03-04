const question = require('../assets/thisOrThat.json');

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let thisembed = new Discord.MessageEmbed()
    .setColor("#f99d9d")
    .setDescription(question[Math.floor(Math.random() * question.length)])
    message.channel.send(thisembed);
}

exports.help = {
    name: 'thisorthat'
}