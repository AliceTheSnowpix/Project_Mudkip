const got = require('got');
const Discord = require('discord.js');
const API_KEY = 'dc6zaTOxFJmzC';

exports.run = async (bot, msg, args) => {

    if(args[0] == "help"){
        msg.reply("Usage: ;gif <search>");
        return;
    }


    if (args.length < 1) {
        return msg.reply('**You must provide something to search for!**');
    }

    const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(args.join(' '))}`, { json: true });

    if (!res || !res.body || !res.body.data) {
        return msg.channel.send('Failed to find a GIF that matched your query!');
    }
    
    msg.delete();

    let gifembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("Here Is A Gif")
    .setImage(res.body.data.image_url)

    msg.channel.send(gifembed)

};

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'gif'
};
