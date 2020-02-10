exports.run = async (bot, message, args) => {
    const discord = bot.discord;
    if(message.channel.type === 'dm') return message.channel.send('This command only works in server.');
    let roles = message.guild.roles.filter(r => r.position !== 0).map(r => `${r.name.toProperCase()} - ${r.id}`).sort();
    let noOfPages = roles.length / 15;
    let paginatedItems = roles.slice(0, 15);
    let page = 1;
    
    let rolesembed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Roles")
    .setFooter(`Page: ${page} of ${Math.floor(noOfPages + 1)}`)

    paginatedItems.forEach(paginatedItem => {
        rolesembed.addField(`${roles.indexOf(paginatedItem) + 1}.`, paginatedItem);
    })
    message.channel.send(rolesembed).then(async msg => {
        if (roles.length > 15) {
            const reaction1 = await msg.react('614293189825789972');
            const reaction2 = await msg.react('❌');
		    const reaction3 = await msg.react('614293189720801290');
		    let first = 0;
            let second = 15;
            
            const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id, {
                time: 120000
            });

            collector.on('collect', r => {
                const reactionadd = roles.slice(first + 15, second + 15).length;
                const reactionremove = roles.slice(first - 15, second - 15).length;
                if (r.emoji.name === 'Arrow_Right' && reactionadd !== 0) {
                page++;
                r.remove(message.author.id);
                    first += 15;
                    second += 15;
                    paginatedItems = roles.slice(first, second);

                    const newEmbed = new discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle("Roles")
                    .setFooter(`Page: ${page} of ${Math.floor(noOfPages + 1)}`)
                    paginatedItems.forEach(paginatedItem => {
                        newEmbed.addField(`${roles.indexOf(paginatedItem) + 1}.`, paginatedItem);
                    });
                    msg.edit(newEmbed);
                } else if (r.emoji.name === 'Arrow_Left' && reactionremove !== 0) {
                    r.remove(message.author.id);
                    page--
                    first -= 15;
                    second -= 15;
                    paginatedItems = roles.slice(first, second);

                    const newEmbed = new discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Roles`)
                    .setFooter(`Page: ${page} of ${Math.floor(noOfPages + 1)}`)
                    paginatedItems.forEach(paginatedItem => {
                        newEmbed.addField(`${roles.indexOf(paginatedItem) + 1}.`, paginatedItem);
                    });
                    msg.edit(newEmbed);
                } else if (r.emoji.name === '❌') {
                    r.remove(message.author.id);
                    reaction1.remove();
                    reaction2.remove();
                    reaction3.remove();
                }
            })
        }
    });

}

exports.help = {
    name: "roles",
}
