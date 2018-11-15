const discord = require('discord.js')

exports.run = (bot, message, args) => {
    require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
      if (!error && response.statusCode == 200) {
          let adviceembed = new discord.RichEmbed()
          .setTitle(`**Advice:**`)
          .setColor('RANDOM')
          .setDescription(`${JSON.parse(body).slip.advice}`)
          message.channel.send(adviceembed);
      } else {
        message.channel.send(`**Advice:**\n I couldn't think of any advice...`);
      }
    });
  }

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: "advice"
}