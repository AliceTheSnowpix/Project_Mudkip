const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete();

if(!args.join(" ")){
  return message.channel.send(":x: " + "| Please Enter Something For The Bot To Say")

}
let sayembed = new Discord.RichEmbed({
disabelEveryone: true})
.setColor('RANDOM')
.setDescription(`<@${message.author.id}>`)
.addField("wanted me to say", args.join(" "))
.setTimestamp(message.createdAt)

message.channel.send(sayembed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "say"
}