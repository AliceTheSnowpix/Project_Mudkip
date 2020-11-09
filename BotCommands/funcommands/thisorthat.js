const question = require('../assets/thisOrThat.json');

exports.run = async (bot, message, _args) => {
    let thisembed = new bot.discord.MessageEmbed()
    .setColor("#f99d9d")
    .setDescription(question[Math.floor(Math.random() * question.length)])
    message.channel.send(thisembed);
}

exports.help = {
    name: 'thisorthat'
}