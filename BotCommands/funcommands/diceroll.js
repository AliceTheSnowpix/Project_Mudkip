const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

    let rollembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1401FF")
    .addField("Rolled", replies[result]);

    message.channel.send(rollembed)

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "roll"
}
