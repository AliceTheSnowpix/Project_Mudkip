const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let roles = message.guild.roles.filter(r => r.position !== 0).map(r => `${r.name} - ${r.id}`).map((r, i) => `${i + 1}. ${r}`);
  
    let noOfPages = roles.length / 25;
    let i = (args.page > 0 && args.page < noOfPages + 1) ? args.page : 1;
    i = i - 1;
   
    let rolesembed = new Discord.RichEmbed()
    .setColor("#84ff96")
    .setTitle("Roles")
    .setDescription(roles.slice(i * 1, (i * 25) + 25).join('\n'))
    .setFooter(`Page: ${i + 1} of ${noOfPages > parseInt(noOfPages) ? parseInt(noOfPages) + 1 : parseInt(noOfPages)}`)

    message.channel.send(rolesembed).then(msg => { 
    
    msg.react('⏪').then( r => { 
        msg.react('⏩') 

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
        forwards.on('collect', r => { 
            let rolesembed = new Discord.RichEmbed()
            .setColor("#84ff96")
            .setTitle("Roles")
            .setDescription(roles.slice(i * 1, (i * 50) + 50).join('\n'))
            .setFooter(`Page: ${i + 1} of ${noOfPages > parseInt(noOfPages) ? parseInt(noOfPages) + 1 : parseInt(noOfPages)}`)
            msg.edit(rolesembed)
           });
        });
    });
}

exports.config = {
    aliases: []
  };

exports.help = {
    name: "roles",
}
