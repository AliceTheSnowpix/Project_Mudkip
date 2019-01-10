const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    let joinembed = new Discord.RichEmbed()
    .setColor('#9685f7')
    .setDescription("here [click/tap this](https://discord.gg/fGQTVek) to join my support server")
    
    message.channel.send(joinembed);
}

exports.config = {
    aliases: [  ]
};
    
    module.exports.help = {
        name: "join"
    }
