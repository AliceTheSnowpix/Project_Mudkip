exports.run = async (bot, message, args) => {
    if (args.length < 1) return message.channel.send('you need to provide the issue you are having');

    let reportEmbed = new bot.discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#FF0000")
    .addFields([{name: "Reported From", value: message.guild.name},
                {name: "Reported By", value: message.author.username},
                {name: "Time", value: message.createdAt},
                {name: "Issue", value: args.join(' ')}]);

    await message.reply('your issue has been sent to the support server')
    bot.guilds.cache.get('456629010890227714').channels.cache.get('478108765707829254').send(reportEmbed);
}

exports.help = {
    name: "report"
}
