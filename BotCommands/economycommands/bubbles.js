exports.run = async(bot, message, _args) => {
    const db = bot.db;
    let userbub = message.mentions.members.first();
    let userbubbles = await db.fetch(`bubbles_${message.author.id}`);

    if (!userbub) {
        let userbubembed = new bot.discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setColor("#77c9ff")
        .addField("You have popped", `${userbubbles} bubbles`);
        message.channel.send(userbubembed);
    } else {
        let memberbubbles = await db.fetch(`bubbles_${userbub.id}`);
        let membubebed = new bot.discord.MessageEmbed()
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
