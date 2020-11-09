exports.run = async (bot, message, _args) => {
    let joinembed = new bot.discord.MessageEmbed()
    .setColor('#9685f7')
    .setDescription("here [click/tap this](https://discord.gg/fGQTVek) to join my support server")
    message.channel.send(joinembed);
}

exports.help = {
    name: "join"
}
