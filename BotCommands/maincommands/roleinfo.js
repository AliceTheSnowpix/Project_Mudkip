exports.run = (bot, message, args) => {
    const Discord = bot.discord;
    if (message.channel.type === 'dm') return message.channel.send('This command only works in server.');
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(role => role.name === args.join(' '));
    
    if (!role) role = message.member.highestRole;
    const roleinfo = new Discord.MessageEmbed()
    .setColor(role.hexColor)
    .setTitle(`Role: ${role.name}`)
    .addField('Members', role.members.size, true)
    .addField('Hex', role.hexColor, true)
    .addField('Creation Date', role.createdAt.toDateString(), true)
    .addField('Editable', role.editable.toString(), true)
    .addField('Managed', role.managed.toString(), true)
    .addField('ID', role.id, true);
    message.channel.send(roleinfo);
};

exports.help = {
    name: "roleinfo",
    aliases: [ 'role', 'role-info' ]
}
