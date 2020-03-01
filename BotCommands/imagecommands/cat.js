const superagent = require('superagent');

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let {body} = await superagent.get(`http:\/\/aws.random.cat\/meow`);
    let catembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("cat :cat:")
    .setImage(body.file)
    message.channel.send(catembed);
}

exports.help = {
    name: "cat"
}