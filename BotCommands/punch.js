const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!pUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");

  
    let punches = [
      'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
      'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
      'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
      'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
      'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
    ];

    let pembed = new Discord.RichEmbed()
    .setColor("#9b42f4")
    .setDescription(`<@${message.author.id}> punched <@${pUser.id}>! :punch:`)
    .setImage(punches[Math.floor(Math.random() * punches.length)])

    message.channel.send(pembed)

}  

exports.config = {
  aliases: [  ]
};

  exports.help = {
    name: 'punch',
  };