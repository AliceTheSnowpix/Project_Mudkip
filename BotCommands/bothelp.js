const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry you cant do that try again when admin");

    let bhembed = new Discord.RichEmbed()
    .setDescription("Setup Info")
    .setColor("#FF00EC")
    .addField("Permissions Needed", "MANAGE_ROLES, MANAGE_SERVER, MANAGE_MESSAGES, MANAGE_CHANNELS, BAN_MEMBERS, KICK_MEMBERS, ADD_REACTIONS, CONNECT, SPEAK, DEAFEN_MEMBERS, MOVE_MEMBERS, MUTE_MEMBERS, READ_MESSAGES, ATTACH_FILES, SEND_MESSAGES, AND EMBEDED_LINKS")
    .setDescription("If I Dont Have All Of These Permissions I Might Not Work Properly So Please Make Sure I Hall All Of These Permissions")
    .addField("If You Need Any Extra Help Or Something Is Not Working Join Here", "https://discord.gg/TyJkqa8, Or Contact My Owner clorox_bleach#1290")
    
    
    try{
        await message.author.send(bhembed);
        message.react("\👍");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the Setup Info.");
    }

}

exports.config = {
    aliases: [ 'bh' ]
};

module.exports.help = {
    name: "bothelp"
}