exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    if (args.length < 1) {
        args[0] = message.member.highestRole.hexColor;
    }

    if (!/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(args[0]) && args[0].toLowerCase() !== 'random') {
        message.channel.send('The color must be in the format of `#<hexcode>`!');
        args[0] = message.member.highestRole.hexColor;
    }

    let color = bot.resolveColor(args[0]);
    if (args[0].toLowerCase() === 'random') {
        color = bot.resolveColor(bot.getRandomHex());
    }

    let embed = new Discord.RichEmbed()
    .setDescription(`Hex: \`#${color.hex}\`\nRGB: \`${color.red}, ${color.green}, ${color.blue}\`\nHSL: \`${color.hue}, ${color.saturation}, ${color.lightness}\``)
    .setImage(`http://placehold.it/500/${color.hex}/${color.hex}`)
    .setColor(`${color.hex}`);
    message.channel.send(embed);
};

exports.help = {
    name: "color"
}
