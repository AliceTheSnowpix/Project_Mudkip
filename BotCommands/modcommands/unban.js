exports.run = async(bot, message, args) => {
    const discord = bot.discord;
    const db = bot.db;
    const logchannel = new db.table('LOGCHANNEL');
    const modrole = new db.table('MODROLE');
    const prefixes = new db.table('PREFIXES');
    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        prefixes.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }
    
    let lc = await logchannel.fetch(`logchannel_${message.guild.id}`);
    const reason = args.slice(1).join(' ');
    const user = args[0];
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const modlog = message.guild.channels.cache.find(a => a.name === 'modlogs');
    const channel = message.guild.channels.cache.get(lc);
    if (!modlog && !channel) return message.reply(`Could not find log channel please set the log channel by using the command ${prefix}set logchannel <channel name> or create a channel called modlogs`);
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You need to send the id of the user you want to unban').catch(console.error);

    let unbanEmbed = new discord.MessageEmbed()
    .setColor('00AAFF')
    .setTitle("Unban")
    .addField("Unbanned User", `<@${user}> with ID ${user}`)
    .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Unbanned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    if (modlog) modlog.send(unbanEmbed);
    else if (channel) channel.send(unbanEmbed);
    message.guild.unban(user);
};

exports.help = {
    name: 'unban'
};
