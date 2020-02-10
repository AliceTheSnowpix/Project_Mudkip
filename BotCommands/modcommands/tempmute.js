const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const logchannel = new db.table('LOGCHANNEL');
const modrole = new db.table('MODROLE');

exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
  if(args[0] == "help"){
      message.reply("Usage: ;tempmute <user> <time>");
      return;
  }

  let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!toMute) return message.reply("You need to give me someone to mute or the person you said me is incorrect");
  if(toMute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
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
  let mutetime = args[1];
  if(!mutetime) return message.reply("Please give me a time");

  await(toMute.addRole(muterole.id));
  message.reply(`<@${toMute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    toMute.removeRole(muterole.id);
    message.channel.send(`<@${toMute.id}> has been unmuted!`);
  }, ms(mutetime));
}

exports.help = {
  name: "tempmute"
}
