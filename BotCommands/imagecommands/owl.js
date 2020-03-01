const superagent = require('superagent');

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let {body} = await superagent.get(`http://pics.floofybot.moe/owl`);
    let owlembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("owl :owl:")
    .setImage(body.image)
    message.channel.send(owlembed);
}

exports.help = {
    name: "owl"
}
