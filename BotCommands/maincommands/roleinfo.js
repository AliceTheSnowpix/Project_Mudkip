exports.run = (bot, message, args) => {
    if (message.channel.type === 'dm') return message.channel.send('This command only works in server.');
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(role => role.name === args.join(' '));
    
    if (!role) role = message.member.highestRole;
    const roleinfo = new bot.discord.MessageEmbed()
    .setColor(role.hexColor)
    .setTitle(`Role: ${role.name}`)
    .addFields([{name: 'Members', value: role.members.size, inline: true},
                {name:'Hex', value: role.hexColor, inline: true},
                {name:'Creation Date', value: role.createdAt.toDateString(), inline: true},
                {name:'Editable', value: role.editable.toString(), inline: true},
                {name:'Managed', value: role.managed.toString(), inline: true},
                {name:'ID', value: role.id, inline: true}]);
    message.channel.send(roleinfo);
};

exports.help = {
    name: "roleinfo",
    aliases: [ 'role', 'role-info' ]
}
