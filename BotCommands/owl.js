const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`http://pics.floofybot.moe/owl`);

    let owlembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("owl :owl:")
    .setImage(body.image)

    message.channel.send(owlembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "owl"
}