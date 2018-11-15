const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
            
        if(args[0] == "help"){
        message.reply("Usage: ;report <user> <reason>");
        return;
        }
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!rUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");
            let rreason = args.join(" ").slice(22);
            
            let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor("#FF0000")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Reported In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reson", rreason);
        
            let reportschannel = message.guild.channels.find(b => b.name === "modlogs");
            if(!reportschannel) return message.channel.send("Could not find modlogs channel");
            if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you can not report that preson");
            
            message.delete().catch(O_o=>{});
            reportschannel.send(reportEmbed);
            
            return;
        
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "report"
}