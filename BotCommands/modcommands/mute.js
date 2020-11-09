exports.run = async(bot, message, args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSetting');

    let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        GuildSettings.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }
    
    let mr = await GuildSettings.fetch(`modrole_${message.guild.id}`);
    let lc = await GuildSettings.fetch(`logchannel_${message.guild.id}`);
    if (!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.has(mr)) return message.reply("Sorry you cant use this command because you do not have the manage messages permission");
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let errorEmbed = new bot.discord.MessageEmbed()
    .setTitle('Incorect Command Usage')
    .setColor('PURPLE')
    .addField('Command usage', `${prefix}mute <member name/mention> (reason)`);

    if (!Mute) return message.reply(errorEmbed);
    let mreason = args.join(" ").slice(22);

    if (Mute.hasPermission("MANAGE_MESSAGES") || Mute.roles.cache.has(mr)) return message.reply("Can't mute them!"); 
    message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.members.cache.get(Mute.id), {
            SEND_MESSAGES: false
        });
    });

    let mutechan = message.guild.channels.cache.find(b => b.name === "modlogs");
    let channel = message.guild.channels.cache.get(lc);
    if (!mutechan && !channel) return message.channel.send(`Could not find log channel please set the log channel by using the command ${prefix}set logchannel <channel name> or create a channel called modlogs`);
    if (!mreason) {
        let muteembed = new bot.discord.MessageEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted`)
        .addField("There was no reason given", `so I don't know why <@${Mute.id}> was muted`);
        if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
        else message.delete();
        if (mutechan) return mutechan.send(muteembed);
        else if (channel) return channel.send(muteembed);
        
    } else {
        let muteembed = new bot.discord.MessageEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted`)
        .addField("Reason for mute", mreason);

        if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
        else message.delete();
        if (mutechan) return mutechan.send(muteembed);
        else if (channel) return channel.send(muteembed);
    }
}

exports.help = {
    name: 'mute'
};
