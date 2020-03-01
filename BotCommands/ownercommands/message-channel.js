exports.run = async (bot, message, args) => {
    if (message.author.id != '293148538886553602') return;
    let guild = args[0];
    let channel = args[1];
    bot.guilds.get(guild).channels.get(channel).send(args.slice(2).join(' '));
}

exports.help = {
    name: "message-channel",
    aliases: ['msg-channel']
}
