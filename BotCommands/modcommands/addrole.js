const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

<<<<<<< HEAD
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
=======
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;addrole <user> <role>");
        return;
    }
    
    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")){
        return message.reply(":x: " + "| i need the \"MANAGE_ROLES\" permission!").catch(console.error);
      }

    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rMember) return message.reply("You need to give me someone to add a role to, or the person you said me is incorrect");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Please specify a role");
    let gRole = message.guild.roles.find(a => a.name === role);
    if(!gRole) return message.reply("You need to give me the name of the role you want me to add to that person, or the role you said is incorrect");
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d

    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role");
    await(rMember.addRole(gRole.id));

    try{
       await rMember.send(`You have been given the role ${gRole.name}`)
    }catch(e){
        message.channel.send(`<@${rMember.id}> They have been given the role ${gRole.name} I tried to DM them but their DMs are locked`)
    }
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "addrole"
}
