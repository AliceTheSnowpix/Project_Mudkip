exports.run = async (bot, message, args) => {
    const db = bot.db;
    const modrole = new db.table('MODROLE');
    let mr = await modrole.fetch(`modrole_${message.guild.id}`);
    if (!message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.cache.has(mr)) return message.channel.send("Sorry you cant do that try again when mod");
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
        return message.reply(":x: " + "| i need the \"MANAGE_ROLES\" permission!").catch(console.error);
    }

    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!rMember) return message.reply("Could not find that user make sure you typed it in right and try again");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Please specify a role");
    let gRole = message.guild.roles.cache.find(a => a.name === role);
    if (!gRole) return message.reply("Could not find that role make sure you typed it in right and try again");

    if (!rMember.roles.cache.has(gRole.id)) return message.reply("They dont have that role");
    await (rMember.roles.remove(gRole.id));
    try {
        rMember.send(`I have removed the role ${gRole.name} from you sorry`);
    } catch(e) {
        message.channel.send(`<@${rMember.id}>I have removed the role ${gRole.name} from them, I tried to DM them but their DMs are locked`);
    }
}

exports.help = {
    name: "removerole"
}
