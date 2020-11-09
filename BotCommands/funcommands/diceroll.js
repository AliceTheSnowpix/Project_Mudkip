exports.run = async (bot, message, _args) => {
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

    let rollembed = new bot.discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1401FF")
    .addField("Rolled", replies[result]);
    message.channel.send(rollembed);
}

exports.help = {
    name: "roll"
}
