const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {

let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!sUser) return message.channel.send("Please give me a user you want to slap");
  
    let slaps = [
      'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
      'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
      'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
      'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
      'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
      'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
    ];
  
    let slapEmbed = new Discord.RichEmbed()
    .setColor("#9b42f4")
    .setDescription(`<@${message.author.id}> slapped <@${sUser.id}>!`)
    .setImage(slaps[Math.floor(Math.random() * slaps.length)])

    message.channel.send(slapEmbed)

  };

exports.config = {
  aliases: [  ]
};
  
exports.help = {
  name: 'slap'
};
