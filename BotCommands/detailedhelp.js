const Discord = require('discord.js');
const help = require('./assets/help/help.json')
const help2 = require('./assets/help/help2.json')
exports.run = async(bot, message, args) => {
    
    let detailedembed = new Discord.RichEmbed()
    .setTitle("Detailed Help Menu")
    .setColor('#FF00EC')
    .setDescription(help)

    try{
        await message.author.send(detailedembed);
        message.react("\🤔");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the detailedcommands.");
    }

    let detaile2dembed = new Discord.RichEmbed()
    .setColor('#FF00EC')
    .setDescription(help2)
    .addField("any command from the songhelp menu", "will play a song")

    try{
        await message.author.send(detaile2dembed);
        message.react("\🤔");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the detailedcommands.");
    }

}

exports.config = {
    aliases: [ 'dh' ]
};

exports.help = {
    name: 'detailedhelp'
}