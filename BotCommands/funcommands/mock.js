const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('')

exports.run = async (bot, message, args) => {
    if (!args.join(" ")) return message.reply("**Please Tell Me What You Want To Mock**")
    let mockEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg")

    message.channel.send(mockEmbed);
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'mock'
}
