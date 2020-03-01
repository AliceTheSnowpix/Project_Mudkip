exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    const db = bot.db;
    const modrole = new db.table('MODROLE');
    const prefixes = new db.table('PREFIXES');
    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);

    if (!prefix) {
        prefixes.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }

    let mr = await modrole.fetch(`modrole_${message.guild.id}`);
    message.guild.roles.get(mr);
    if (!message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.has(mr)) return message.channel.send("Sorry you can't use this command as you do not have the Manage Roles permission.");
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
        return message.reply(":x: " + "| I need the \"MANAGE_ROLES\" permission!").catch(console.error);
    }

    let errorEmbed = new Discord.RichEmbed().setTitle('Incorrect command usage:').setColor('RED');
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rMember) {
        errorEmbed.setDescription('No user given or Invalid user given');
        errorEmbed.addField('Correct command usage:', `${prefix}addrole <user> <role name>`);
        return message.reply(errorEmbed);
    }

    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Please specify a role");
    let gRole = message.guild.roles.find(a => a.name === role);
    if (!gRole) {
        errorEmbed.setDescription('Incorrect role given or No roles with given name');
        errorEmbed.addField('Correct command usage:', `${prefix}addrole <user> <role name>`);
        return message.reply(errorEmbed);
    }

    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role");
    else await rMember.addRole(gRole.id);
    try {
        await rMember.send(`You have been given the role ${gRole.name}`);
    } catch(e) {
        message.channel.send(`<@${rMember.id}> They have been given the role ${gRole.name} I tried to DM them but their DMs are locked`);
    }
}


exports.help = {
    name: "addrole"
}
