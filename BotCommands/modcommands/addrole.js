const Discord = require('discord.js');
const db = require('quick.db');
const logchannel = new db.table('LOGCHANNEL');
const modrole = new db.table('MODROLE');

exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Sorry you can't use this command as you do not have the Manage Roles permission.");
    
    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")){
        return message.reply(":x: " + "| I need the \"MANAGE_ROLES\" permission!").catch(console.error);
      }
  
    let errorEmbed = new Discord.RichEmbed()
    .setTitle('Incorrect command usage:')
    .setColor('RED')
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rMember) {
      errorEmbed.setDescription('No user given or Invalid user given');
      errorEmbed.addField('Correct command usage:', ';addrole <user> <role name>');
      return message.reply(errorEmbed);
    }
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Please specify a role");
    let gRole = message.guild.roles.find(a => a.name === role);
    if(!gRole) {
      errorEmbed.setDescription('Incorrect role given or No roles with given name');
      errorEmbed.addField('Correct command usage:', ';addrole <user> <role name>');
      return message.reply(errorEmbed);
    }

    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role");
    await(rMember.addRole(gRole.id));

    try{
       await rMember.send(`You have been given the role ${gRole.name}`)
    }catch(e){
        message.channel.send(`<@${rMember.id}> They have been given the role ${gRole.name} I tried to DM them but their DMs are locked`)
    }
}


exports.help = {
    name: "addrole"
}