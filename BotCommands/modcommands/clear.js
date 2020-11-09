exports.run = async (bot, message, args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSetting');
    let mr = GuildSettings.fetch(`modrole${message.guild.id}`);
    if (!message.member.hasPermission("MANAGE_MESSAGES") && message.member.roles.has(mr)) return message.channel.send("Sorry you cam't use this command because you do not have the Mannage Messages permission.");    
    if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
        return message.reply(":x: " + "| I need the \"MANAGE_MESSAGES\" permission!").catch(console.error);
    }

    await message.delete();
    if (!args[0] || args[0] <= 0) return message.reply("please give me a number between 1 to 100.");
    if (args[0] >= 101) return message.reply('I can only delete 100 messages at a time.');
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(100));
    });
}

exports.help = {
    name: "clear"
}
