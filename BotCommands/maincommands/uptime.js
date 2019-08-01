const Discord = require('discord.js');

exports.run = async (bot, message) => {
    var milliseconds = parseInt((bot.uptime % 1000) / 100),
        seconds = parseInt((bot.uptime / 1000) % 60),
        minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
        hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24),
        days = parseInt((bot.uptime / (1000 * 60 * 60 * 24)) % 99);

        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        let upembed = new Discord.RichEmbed()
        .setColor('#c464ea')
        .setTitle(":chart_with_upwards_trend: I've been running for")
        .setDescription("** " + days + " **days, **" + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!")

        message.channel.send(upembed)
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'uptime'
};
