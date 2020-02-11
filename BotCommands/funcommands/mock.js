exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
    if (!args.join(" ")) return message.reply("**Please Tell Me What You Want To Mock**");
    let mockEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.glitch.com/952eb130-408e-4eda-9f41-b2ad740ad159%2Fmock.jpg?v=1565761021131");
    message.channel.send(mockEmbed);
}

exports.help = {
    name: 'mock'
}
