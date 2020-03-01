exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let seconds = parseInt((bot.uptime / 1000) % 60),
    minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
    hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24),
    days = parseInt((bot.uptime / (1000 * 60 * 60 * 24)) % 99);

    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let upembed = new Discord.RichEmbed()
    .setColor('#c464ea')
    .setTitle(":chart_with_upwards_trend: I've been running for")
    .setDescription("** " + days + " **days, **" + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "** seconds!");
    message.channel.send(upembed);
}

exports.help = {
    name: 'uptime'
}
