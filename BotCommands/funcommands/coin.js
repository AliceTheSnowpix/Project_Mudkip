exports.run = async (bot, message, args) => {
    const Discord = bot.dsicord;
    let replies = ["Heads", "Tails"];
    let result = Math.floor((Math.random() * replies.length));

    let flipembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1401FF")
    .addField("Fliped", replies[result]);
    message.channel.send(flipembed);
}

exports.help = {
    name: "coinflip"
}