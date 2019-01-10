const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`https://animals.anidiots.guide/penguin`);

    let penguinembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("penguin :penguin:")
    .setImage(body.link)

    message.channel.send(penguinembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "penguin"
}
