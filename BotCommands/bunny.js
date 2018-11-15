const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`https://api.bunnies.io/v2/loop/random/?media=gif,png`);

    let bunnyembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("bunny :rabbit2:")
    .setImage(body.media.gif)

    message.channel.send(bunnyembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "bunny"
}