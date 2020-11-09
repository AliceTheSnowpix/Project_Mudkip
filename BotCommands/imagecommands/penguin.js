const superagent = require('superagent');

exports.run = async (bot, message, _args) => {
    let {body} = await superagent.get(`https://animals.anidiots.guide/penguin`);
    let penguinembed = new bot.discord.MessageEmbed()
    .setColor("#01FF6D")
    .setTitle("penguin :penguin:")
    .setImage(body.link);
    message.channel.send(penguinembed);
}

exports.help = {
    name: "penguin"
}
