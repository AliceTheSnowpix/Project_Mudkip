const question = require('../assets/wouldYouRather.json');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let wouldembed = new Discord.RichEmbed()
    .setColor("#f99d9d")
    .setDescription(question[Math.floor(Math.random() * question.length)])
    
    let wyrChannel = message.guild.channels.find(a => a.name === 'wyr');
    let wyrChannel2 = message.guild.channels.find(a => a.name === 'would-you-rather');
    
    if(message.channel === wyrChannel || message.channel === wyrChannel2) {
        message.channel.send(wouldembed).then(async msg => { 
            await msg.react("1⃣");
             msg.react("2⃣");
        });
    } else {
        message.channel.send(wouldembed);
    }
};

exports.config = {
  aliases: [ 'wyr' ]
};

exports.help = {
  name: 'wouldyourather',
  aliases: ['wyr']
};
