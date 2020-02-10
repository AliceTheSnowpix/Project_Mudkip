exports.run = async(bot, message, args) => {
    const discord = bot.discord;
    const db = bot.db;
    let userbub = message.mentions.members.first();
    let userbubbles = await db.fetch(`bubbles_${message.author.id}`);

    if (!userbub) {
        let userbubembed = new discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setColor("#77c9ff")
        .addField("You have popped", `${userbubbles} bubbles`);
        message.channel.send(userbubembed);
    } else {
        let memberbubbles = await db.fetch(`bubbles_${userbub.id}`);
        let membubebed = new discord.RichEmbed()
        .setAuthor(userbub.displayName)
        .setThumbnail(userbub.user.avatarURL)
        .setColor("#77c9ff")
        .addField(`has popped`, `${memberbubbles} bubbles`);
        message.channel.send(membubebed);
    }
}

exports.help = {
    name: 'bubbles',
    aliases: ['bubs', 'bal', 'balance']
}
