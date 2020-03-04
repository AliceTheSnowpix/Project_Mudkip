exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let replies = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    let result = Math.floor((Math.random() * replies.length));

    let cardembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1401FF")
    .addField("Fliped", replies[result]);
    message.channel.send(cardembed);
}

exports.help = {
    name: "card"
}
