const superagent = require('superagent');

exports.run = async(bot, message, _args) => {
    const Discord = bot.discord;
    let {body} = await superagent.get(`https://api.bunnies.io/v2/loop/random/?media=gif,png`);
    let bunnyembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("bunny :rabbit2:")
    .setImage(body.media.gif)
    message.channel.send(bunnyembed);
}

exports.help = {
    name: "bunny"
}