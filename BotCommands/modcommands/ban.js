const Discord = require('discord.js');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.run = async (bot, message, args) => {  
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry you can't use this command as you do not have the Ban Members permission");
  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    return message.reply(":x: " + "| I need the \"BAN_MEMBERS\" permission!").catch(console.error);
  }
  
  let errorEmbed = new Discord.RichEmbed()
  .setTitle('Incorrect command usage:')
  .setColor('RED')
  
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) {
    errorEmbed.setDescription('No user given or Invalid user given.');
    errorEmbed.addField('Correct command usage:', ';ban <user> <reason>');
    return message.reply(errorEmbed);
  }
  let breason = args.join(" ").slice(22);
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry you can not ban this user because they have the Ban Members permission");

  let banEmbed = new Discord.RichEmbed()
  .setTitle("Ban Report!")
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}

exports.config = {
    aliases: [ 'b' ]
};

<<<<<<< HEAD
exports.help = {
  name: "ban",
  aliases: ['b']
=======
<<<<<<< HEAD
exports.help = {
  name: "ban",
  aliases: ['b']
=======
module.exports.help = {
    name: "ban"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
