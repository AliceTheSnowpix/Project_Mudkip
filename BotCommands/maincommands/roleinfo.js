const Discord = require("discord.js");

exports.run = (bot, message, args) => {
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
};

exports.config = {
    aliases: [ 'role', 'role-info' ]
};

exports.help = {
    name: "roleinfo"
}
