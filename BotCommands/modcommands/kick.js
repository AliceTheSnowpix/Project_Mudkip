exports.run = async (bot,message,args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSetting');

    let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        GuildSettings.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }

    let mr = await GuildSettings.fetch(`modrole_${message.guild.id}`);
    let lc = await GuildSettings.fetch(`logchannel_${message.guild.id}`);
    message.guild.roles.cache.get(mr);
    if (!message.member.hasPermission("KICK_MEMBERS") && !message.member.roles.cache.has(mr)) return message.channel.send("Sorry you cant do that try again when mod");
    if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
    }

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!kUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");
    let kreason = args.join(" ").slice(22);
    if (kUser.hasPermission("KICK_MEMBERS") || kUser.roles.cache.has(mr)) return message.channel.send("Sorry you can not kick that preson");
    let kickEmbed = new bot.discord.MessageEmbed()
    .setTitle("Kick Report")
    .setColor("#00AAFF")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason);

    let kickchannel = message.guild.channels.cache.find(b => b.name === "modlogs");
    let channel = message.guild.channels.cache.get(lc);
    if (!kickchannel && !channel) return message.channel.send(`Could not find log channel please set the log channel by using the command ${prefix}set logchannel <channel name> or create a channel called modlogs`);
    if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
    else message.delete();
    if (kickchannel) kickchannel.send(kickEmbed);
    else if (channel) channel.send(kickEmbed);
    message.guild.member(kUser).kick(kreason);
}

exports.help = {
    name: "kick"
}
