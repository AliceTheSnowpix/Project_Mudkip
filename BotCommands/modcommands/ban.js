exports.run = async (bot, message, args) => {  
    const Discord = bot.discord;
    const db = bot.db;
    const modrole = new db.table('MODROLE');
    const logchannel = new db.table('LOGCHANNEL');
    const prefixes = new db.table('PREFIXES');
    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);

    if (!prefix) {
        prefixes.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }

    let mr = await modrole.fetch(`modrole_${message.guild.id}`);
    let lc = await logchannel.fetch(`logchannel_${message.guild.id}`);
    message.guild.roles.cache.get(mr);
    if (!message.member.hasPermission("BAN_MEMBERS") && !message.member.roles.cache.has(mr)) return message.channel.send("Sorry you can't use this command as you do not have the Ban Members permission");
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
        return message.reply(":x: " + "| I need the \"BAN_MEMBERS\" permission!").catch(console.error);
    }
    
    let errorEmbed = new Discord.MessageEmbed().setTitle('Incorrect command usage:').setColor('RED');
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!bUser) {
        errorEmbed.setDescription('No user given or Invalid user given.');
        errorEmbed.addField('Correct command usage:', `${prefix}ban <user> <reason>`);
        return message.reply(errorEmbed);
    }

    let breason = args.join(" ").slice(22);
    if(bUser.hasPermission("BAN_MEMBERS") || bUser.roles.cache.has(mr)) return message.channel.send("Sorry you can not ban this user because they have the Ban Members permission");
    let banEmbed = new Discord.MessageEmbed()
    .setTitle("Ban Report!")
    .setColor("#00AAFF")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", breason);

    let banchannel = message.guild.channels.cache.find(b => b.name === "modlogs");
    let channel = message.guild.channels.cache.get(lc);
    if (!banchannel && !channel) return message.channel.send(`Could not find log channel please set the log channel by using the command ${prefix}set logchannel <channel name> or create a channel called modlogs`);
    if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
    else message.delete();
    if (banchannel) banchannel.send(banEmbed);
    else if (channel) channel.send(banEmbed);
    message.guild.member(bUser).ban(breason);
}


exports.help = {
    name: "ban"
}
