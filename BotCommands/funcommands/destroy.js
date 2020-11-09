exports.run = async (bot, message, args) => {
    let delembed = new bot.discord.MessageEmbed()
    .setColor("#f3ff77")
    .setTitle(`${args.length ? args.join(' ') : `${message.author.username}`} is being removed.`)
    .setImage("https://resources.bastionbot.org/images/remove_button.gif");
    message.channel.send(delembed);
}

exports.help = {
    name: 'destroy'
}
