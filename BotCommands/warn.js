const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot,message,args) => {
        
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;warn <user> <reason>");
        return;
        }

        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply("Could not find that user make sure you typed it in right and try again.");
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you can not warn that preson");
        let reason = args.join(" ").slice(22);

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };

        warns[wUser.id].warns++;

        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err);
        });

        let warnEmbed = new Discord.RichEmbed()
        .setDescription("~Warns~")
        .setAuthor(message.author.username)
        .setColor("#FF6501")
        .addField("Warned User", `<@${wUser.id}>`)
        .addField("Warned In", message.channel)
        .addField("Number Of Warnings", warns[wUser.id].warns)
        .addField("Reason", reason);
        
        let warnchannel = message.guild.channels.find(b => b.name === "modlogs");
        if(!warnchannel) return message.channel.send("Could not find modlogs channel");

       warnchannel.send(warnEmbed);

        if(warns[wUser.id].warns == 3){
            let muterole = message.guild.roles.find(`name`, "muted");
            if(!muterole){
                try{
                  muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000",
                    permissions:[]
                  })
                  message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                    });
                  });
                }catch(e){
                  console.log(e.stack);
                }
              }
              let mutetime = "5m";
              await(wUser.addRole(muterole.id));
              message.channel.send(`${wUser.tag} has been muted for 5 mins`);

              setTimeout(function(){
                wiser.removeRole(muterole.id);
                message.channel.reply("They have been unmuted");
              }, ms(mutetime));
        }
        if(warns[wUser.id].warns == 6){
            message.guild.member(wUser).ban(reason);
            message.channel.send(`${wUser.tag} has been banned rip`)
        }

}

exports.config = {
  aliases: [  ]
};

module.exports.help = {
    name: "warn"
}