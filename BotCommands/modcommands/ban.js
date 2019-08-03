const Discord = require('discord.js');
const db = require('quick.db');
const logchannel = new db.table('LOGCHANNEL');
const modrole = new db.table('MODROLE');

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
}


exports.help = {
  name: "ban",
  aliases: ['b']
}
