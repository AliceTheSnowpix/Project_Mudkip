const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;warnings <user>");
        return;
        }

        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!wUser) return message.reply("Could not find that user make sure you typed it in right and try again.");
        let warnlevel = warns[wUser.id].warns;

        message.reply(`<@${wUser.id}> has ${warnlevel} warnings`);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "warnings"
}