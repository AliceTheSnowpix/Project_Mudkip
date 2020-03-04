const randomPuppy = require("random-puppy");

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    randomPuppy('dankmemes').then(url => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Here is a meme')
        .setTimestamp()
        .setImage(url)
        .setColor(`RANDOM`);
        message.channel.send(embed);
    });
}

exports.help = {
    name: "meme"
}