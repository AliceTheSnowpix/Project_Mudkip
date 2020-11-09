exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sorry you cant do this right now. Try again when you have the administrator permission');
    if (!args[0]) return message.reply('You need to give me something so I can make a poll');

    let pollembed = new bot.discord.MessageEmbed()
    .setColor('RANDOM')
    .setFooter('React to vote')
    .setDescription(args.join(' '))
    .setTitle(`Poll created by ${message.author.username}`)
    .setTimestamp(message.createdAt);
    let msg = await message.channel.send(pollembed);

    await msg.react('✅');
    await msg.react('❌');
    message.delete({timeout: 1000});
}

exports.help = {
    name: 'poll'
}
