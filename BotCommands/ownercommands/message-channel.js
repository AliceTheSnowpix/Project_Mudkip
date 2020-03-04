exports.run = async (bot, message, args) => {
    if (message.author.id != '293148538886553602') return;
    let guild = args[0];
    let channel = args[1];
    bot.guilds.cache.get(guild).channels.cache.get(channel).send(args.slice(2).join(' '));
}

exports.help = {
    name: "message-channel",
    aliases: ['msg-channel']
}
