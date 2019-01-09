const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
     
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;ban <user> <reason>");
        return;
    }

    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
        return message.reply(":x: " + "| i need the \"BAN_MEMBERS\" permission!").catch(console.error);
      }

        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("You need to give me someone to ban from the server, or the person you said me is incorrect");
        let breason = args.join(" ").slice(22);
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry you can not ban that preson");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#00AAFF")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", breason);

        let banchannel = message.guild.channels.find(b => b.name === "modlogs");
        if(!banchannel) return message.channel.send("Could not find modlogs channel");

        message.delete().catch(O_o=>{});
        banchannel.send(banEmbed);
        message.guild.member(bUser).ban(breason);
        return;
}

exports.config = {
    aliases: [ 'b' ]
};

module.exports.help = {
    name: "ban"
}
