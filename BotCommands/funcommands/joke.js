const jokes = require('../assets/jokes.json');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    let jokesembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(`${jokes[Math.floor(Math.random() * jokes.length)]}`)
    message.channel.send(jokesembed);
}

exports.help = {
    name:'joke'
}
