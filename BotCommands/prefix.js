const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
        
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry you cant do that try again when admin");
    if(args[0] == "help"){
        message.reply("Usage: ;prefix <your prefix here>");
        return;
        }

        if (!args.join(" ")) return message.reply("**Please tell me what the new prefix should be**.")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err);
    });
    
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF0101")
    .setTitle("Prefix Set")
    .setDescription(`Set to ${args[0]}`)
    .addField("Note this will only effect non music commands", "for music commands you will have to use the normal prefix")

    message.channel.send(sEmbed);
       
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "prefix"
}