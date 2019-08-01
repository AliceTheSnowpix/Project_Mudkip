const dotbeat = require("dotbeat");
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let swembed = new Discord.RichEmbed()
    .setColor('#c464ea')
    .addField("The Current Time In Beats Is", `${dotbeat.get("string", true)}.`)

  message.channel.send(swembed);
};

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'swatch'
}
