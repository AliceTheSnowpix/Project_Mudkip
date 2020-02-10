exports.run = async (bot,message,args) => {
    const Discord = bot.discord;
    let joinembed = new Discord.RichEmbed()
    .setColor('#9685f7')
    .setDescription("here [click/tap this](https://discord.gg/fGQTVek) to join my support server")
    message.channel.send(joinembed);
}

exports.help = {
    name: "join"
}
