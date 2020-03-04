const jokes = require('../assets/jokes.json');

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let jokesembed = new Discord.MessageEmbed()
    .setColor("#f99d9d")
    .setDescription(`${jokes[Math.floor(Math.random() * jokes.length)]}`);
    message.channel.send(jokesembed);
}

exports.help = {
    name:'joke'
}