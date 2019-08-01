const Discord = require('discord.js');
exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;kick <user> <reason>");
        return;
    }

    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
      return message.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
    }
        
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");
    let kreason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry you can not kick that preson");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Kick Report")
    .setColor("#00AAFF")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason);
    let kickchannel = message.guild.channels.find(b => b.name === "modlogs");
    if(!kickchannel) return message.channel.send("Could not find modlogs channel");

    message.delete().catch(O_o=>{});
    kickchannel.send(kickEmbed);
    message.guild.member(kUser).kick(kreason);
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: "kick"
}
