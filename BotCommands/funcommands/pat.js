const request = require('request-promise-native');
const Discord = require('discord.js')

exports.run = async (_bot, message, args) => {
    let patUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!patUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");
    let options = {
        url: 'http://api.giphy.com/v1/gifs/search',
        qs: {
            q: 'pat',
            api_key: 'dc6zaTOxFJmzC',
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
    .setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
    message.channel.send(patembed);
}

exports.help = {
    name: 'pat',
}
