const math = require('mathjs');

exports.run = async(bot, message, args) => {
    const Discord = bot.discord;
    if(!args[0]) return message.reply("**Please give me a calculation**");
    let resp;
    try {
        resp = math.eval(args.join(' '))
    } catch (e) {
        return message.reply("**please give me a valid calculation**");
    }
    let mathembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Math Calculation')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``)
    message.channel.send(mathembed);
}

exports.help = {
    name: 'calc'
}
