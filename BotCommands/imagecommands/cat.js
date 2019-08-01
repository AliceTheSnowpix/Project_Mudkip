const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`http:\/\/aws.random.cat\/meow`);

    let catembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("cat :cat:")
    .setImage(body.file)

    message.channel.send(catembed);

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "cat"
}
