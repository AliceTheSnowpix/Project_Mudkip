const randomPuppy = require("random-puppy");

exports.run = async (bot, message, _args) => {
    randomPuppy('dankmemes').then(url => {
        const embed = new bot.discord.MessageEmbed()
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