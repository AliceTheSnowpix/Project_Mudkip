exports.run = async (bot, message, _args) => {
    const Discord = bot.dsicord;
    let replies = ["Heads", "Tails"];
    let result = Math.floor((Math.random() * replies.length));

    let flipembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1401FF")
    .addField("Fliped", replies[result]);
    message.channel.send(flipembed);
}

exports.help = {
    name: "coinflip"
}