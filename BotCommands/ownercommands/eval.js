exports.run = async (bot, message, args) => {
    if (message.author.id !== '293148538886553602') return;
    try {
        const code = String(args.join(" "));
        let evaled = eval(code);
        let rawEvaled = evaled;
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

        let embed = new bot.discord.MessageEmbed()
        .setTitle(`Evaluated in ${Math.round(bot.ws.ping)}ms`)
        .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField(":outbox_tray: Output", `\`\`\`js\n${bot.clean(evaled).replace(bot.token, "Are you retarded?")}\n\`\`\``)
        .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
        .setColor('GREEN');
        message.channel.send(embed);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`js\n${bot.clean(err)}\n\`\`\``);
    }
}

exports.help = {
    name: "eval"
}
