const request = require('request-promise-native');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    require('dotenv').config();
    
    if (args.length < 1) {
        let options = {
            url: 'https://api.giphy.com/v1/gifs/trending',
            qs: {
                api_key: process.env.GIPHY,
                limit: 10,
                offset: 0
            },
            json: true
        }
        
        let response = await request(options);
        if (response.data.length);
        let gifembed = new Discord.RichEmbed()
        .setColor("#01FF6D")
        .setTitle("Here Is A Random Gif")
        .setImage(response.data[Math.floor(Math.random()* response.data.length)].images.original.url)
        .setThumbnail('https://cdn.glitch.com/952eb130-408e-4eda-9f41-b2ad740ad159%2FPoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif?v=1565759111525');
        message.channel.send(gifembed);
    }

    let options = {
        url: 'http://api.giphy.com/v1/gifs/search',
        qs: {
            q: args.join(' '),
            api_key: process.env.GIPHY,
            limit: 10,
            offset: 0
        },
        json: true
    };
    
    let response = await request(options);
    if (response.data.length);
    let gifembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("Here Is A Gif")
    .setImage(response.data[Math.floor(Math.random()* response.data.length)].images.original.url)
    .setThumbnail('https://cdn.glitch.com/952eb130-408e-4eda-9f41-b2ad740ad159%2FPoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif?v=1565759111525');
    message.channel.send(gifembed);
};

exports.help = {
    name: 'gif'
};
