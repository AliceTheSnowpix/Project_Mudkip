const request = require('request-promise-native');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    let patUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!patUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");

    require('dotenv').config();
    let options = {
        url: 'http://api.giphy.com/v1/gifs/search',
        qs: {
            q: 'pat',
            api_key: process.env.GIPHY,
            limit: 10,
            offset: 0
        },
        json: true
    };
  
    let response = await request(options);
    if (response.data.length) return;

    let patembed = new Discord.RichEmbed()
    .setColor('#9b42f4')
    .setDescription(`<@${patUser.id}> got a pat from <@${message.author.id}>`)
    .setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url);
    message.channel.send(patembed);
}

exports.help = {
    name: 'pat'
}