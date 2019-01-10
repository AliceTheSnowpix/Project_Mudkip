const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let date = new Date();

    let hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    let min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    let sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    let day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    let timeembed = new Discord.RichEmbed()
    .setColor('#c464ea')
    .setTitle("Here Is The Time :clock:")
    .addField("Day Of The Year", month + "/" + day + "/" + year)
    .addField("Time OF The Day", hour + ":" + min + ":" + sec)
    .setTimestamp(message.createdAt)
    message.channel.send(timeembed)
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "time"
}
