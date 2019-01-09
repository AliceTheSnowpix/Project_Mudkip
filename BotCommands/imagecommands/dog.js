const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("dog :dog:")
    .setImage(body.url);

    message.channel.send(dogembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "dog"
}
