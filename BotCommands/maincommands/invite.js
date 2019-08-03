const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    let inviteembed = new Discord.RichEmbed()
    .setColor('#9685f7')
    .setDescription("Here [click/tap this](https://discordapp.com/oauth2/authorize?client_id=460159835544092674&scope=bot&permissions=301263990) to add me to your server")
    message.channel.send(inviteembed);
}


exports.help = {
  name: "invite",
  aliases: ['inv']
}