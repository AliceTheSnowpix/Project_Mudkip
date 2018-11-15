const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return;
  if(message.channel.type !=="text") return;
  
   randomPuppy('memes')
  .then(url => {
                const embed = new Discord.RichEmbed()
                    .setTitle('Here is a meme')
                    .setTimestamp()
                    .setImage(url)
                    .setColor(`RANDOM`)
                     message.channel.send({ embed });
  })
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
  name: "meme"
}