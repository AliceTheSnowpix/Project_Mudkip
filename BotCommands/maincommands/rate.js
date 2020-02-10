exports.run = async(bot, message, args) => {
    const Discord = bot.discord;
    if (!args.join(" ")) return message.reply("**Please tell me who/what to rate**");
    let ratings = ["0", "⭐ 1", "⭐⭐ 2", "⭐⭐⭐ 3", "⭐⭐⭐⭐ 4", "⭐⭐⭐⭐⭐ 5", "⭐⭐⭐⭐⭐⭐ 6",  "⭐⭐⭐⭐⭐⭐⭐ 7", "⭐⭐⭐⭐⭐⭐⭐⭐ 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10"];
    let result = Math.floor((Math.random() * ratings.length));
    let rateEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField("Rate", args.join(' '))
    .addField("Rating", ratings[result]);
    message.channel.send(rateEmbed)
}

exports.help = {
    name: 'rate'
}
