const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
    
    let delembed = new Discord.RichEmbed()
    .setColor("#f3ff77")
    .setTitle(`${args.length ? args.join(' ') : 'You Are'} is being removed.`)
    .setImage("https://resources.bastionbot.org/images/remove_button.gif")

    
    message.channel.send(delembed);
  }

  exports.config = {
    aliases: [  ]
};
  
  exports.help = {
    name: 'destroy'
  }
