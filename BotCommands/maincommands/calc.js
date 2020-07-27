const math = require('mathjs');

exports.run = async(bot, message, args) => {
    const Discord = bot.discord;
    if (!args[0]) return message.reply("**Please give me a calculation**");
    let resp;

    try {
        resp = math.evaluate(args.join(' '));
    } catch (e) {
        return message.reply("**please give me a valid calculation**");
    }

    let mathembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Math Calculation')
    .addFields([{name: '**Input**', value: `\`\`\`js\n${args.join(' ')}\`\`\``},
                {name: '**Output**', value: `\`\`\`js\n${resp}\`\`\``}]);
    message.channel.send(mathembed);
}

exports.help = {
    name: 'calc'
}
