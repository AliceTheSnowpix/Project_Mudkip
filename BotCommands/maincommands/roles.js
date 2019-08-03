const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if(message.channel.type === 'dm') return message.channel.send('This command only works in server.');
    let roles = message.guild.roles.filter(r => r.position !== 0).map(r => `${r.name} - ${r.id}`).map((r, i) => `${i + 1}. ${r}`);
  
    let noOfPages = roles.length / 25;
    let i = (args.page > 0 && args.page < noOfPages + 1) ? args.page : 1;
    i = i - 1;
   
    let rolesembed = new Discord.RichEmbed()
    .setColor("#84ff96")
    .setTitle("Roles")
    .setDescription(roles.slice(i * 1, (i * 25) + 25).join('\n'))
    .setFooter(`Page: ${i + 1} of ${noOfPages > parseInt(noOfPages) ? parseInt(noOfPages) + 1 : parseInt(noOfPages)}`)

    message.channel.send(rolesembed)

}

exports.help = {
    name: "roles",
}