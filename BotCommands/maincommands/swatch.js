const dotbeat = require("dotbeat");

exports.run = async (bot, message, _args) => {
    let swembed = new bot.discord.MessageEmbed()
    .setColor('#c464ea')
    .addField("The Current Time In Beats Is", `${dotbeat.get("string", true)}.`)
    message.channel.send(swembed);
};

exports.help = {
    name: 'swatch'
}