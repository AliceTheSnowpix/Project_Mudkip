const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor("#FF00EC")
    .addField("Member Commands", "help, songhelp, detailedhelp, info, server, user, dog, 8ball, roll, flip, start, cat, bingo, kms, bunny, penguin, owl, rip, number, block, tiny, color, invite, weather, fliptext, destroy, roles, punch, slap, wouldyourather, thisorthat, clap, space, gif, time, copypaste, uptime, rps, cookie, achievement, shorten, numfact, urban, cowsay, photo, pat, quote, joke, imgtfy, magik, bubble, ascii, autouser, join, google, say, pay, stop, summon, play, queue, voteskip, pause, resume, search, retro, meme, videoinfo, and report.")
    .addField("If you want a nice list of all the commands with descriptions", '[click or tap here](https://docs.google.com/document/d/1ZoM4A5S1Gd0xJoCQfrtPhqTwnN-eksIK3px7SIHhEBs/edit?usp=sharing)')

    message.channel.send(helpembed)

    
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setTitle("Mod Help Menu")
    .setColor("#FF00EC")
    .addField("Mod Commands", "addrole, removerole, kick, ban, warn, warnings, mute, unmute, and tempmute");

    try{
        await message.author.send(modembed);
        message.react("\👍");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the mod commands.");
    }

    
    if(message.member.hasPermission("ADMINISTRATOR")){
    let adminembed = new Discord.RichEmbed()
    .setTitle("Admin Help Menu")
    .setColor("#FF00EC")
    .addField("Admin Commands", "prefix, poll, and bothelp");

    try{
        await message.author.send(adminembed);
        message.react("\👍");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the mod commands.");
    }


    if(message.guild.id == ('456629010890227714')){
    let serverembed = new Discord.RichEmbed()
    .setTitle("Suport Server Only Menu")
    .setColor('#FF00EC')
    .addField("Support Server Only Commands", "shop, and daily")

       try{
        await message.author.send(serverembed);
        message.react("\👍");
    }catch(e){
        message.reply("Your DMs are locked, I can not send you the servr only commands.");
    }



}

}

}

}

exports.config = {
    aliases: [ 'h' ]
};

module.exports.help = {
    name: "help"
}