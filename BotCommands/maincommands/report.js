exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    if (args.length < 1) return message.channel.send('you need to provide the issue you are having');

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#FF0000")
    .addField("Reported From", message.guild.name)
    .addField("Reported By", message.author.username)
    .addField("Time", message.createdAt)
    .addField("Issue", args.join(' '));

    await message.reply('your issue has been sent to the support server')
    bot.guilds.cache.get('456629010890227714').channels.cache.get('478108765707829254').send(reportEmbed);
}

exports.help = {
    name: "report"
}
