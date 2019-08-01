const Discord = require("discord.js");

exports.run = (bot, message, args) => {
<<<<<<< HEAD
  if(message.channel.type === 'dm') return message.channel.send('This command only works in server.');
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args.join(' '));
  
  if (!role) role = message.member.highestRole;
    const roleinfo = new Discord.RichEmbed()
      .setColor(role.hexColor)
      .setTitle(`Role: ${role.name}`)
      .addField('Members', role.members.size, true)
      .addField('Hex', role.hexColor, true)
      .addField('Creation Date', role.createdAt.toDateString(), true)
      .addField('Editable', role.editable.toString(), true)
      .addField('Managed', role.managed.toString(), true)
      .addField('ID', role.id, true);
    message.channel.send(roleinfo) 
=======
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args.join(' '));

    if (!role) role = message.member.highestRole;
        const roleinfo = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('Members', role.members.size, true)
        .addField('Hex', role.hexColor, true)
        .addField('Creation Date', role.createdAt.toDateString(), true)
        .addField('Editable', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true);
        message.channel.send(roleinfo) 
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
};

exports.config = {
    aliases: [ 'role', 'role-info' ]
};

exports.help = {
<<<<<<< HEAD
  name: "roleinfo",
  aliases: [ 'role', 'role-info' ]
=======
    name: "roleinfo"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
}
