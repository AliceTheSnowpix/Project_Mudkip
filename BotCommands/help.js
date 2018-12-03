const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor("#FF00EC")
    .addField("Member Commands", "8ball, achievement, advice, ascii, autouser, bingo, blocktext, bubble, bubbles, bunny, calc, card, cat, clap, coin, color, cookie, copypaste, cowsay, destroy, detailedhelp, dicerole, dog, duck, fliptext, gif, google, help, info, invite, join, joke, kms, lmgtfy, magik, meme, mock, numbers, numfact, owl, pat, pause, pay, play, penguin, photo, punch, queue, quote, rate, report, resume, retro, rip, roles, rps, say, search, server, shorten, slap, songhelp, space, start, stop, summon, swatch, thisorthat, time, tiny, tts, user, videoinfo, voteskip, wether, and wouldyourather")
    .addField("If you want a nice list of all the commands with descriptions", '[click or tap here](https://docs.google.com/document/d/1ZoM4A5S1Gd0xJoCQfrtPhqTwnN-eksIK3px7SIHhEBs/edit?usp=sharing)')

    message.channel.send(helpembed)

    
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setTitle("Mod Help Menu")
    .setColor("#FF00EC")
    .addField("Mod Commands", "addrole, ban, clear, kick, mute, removerole, tempmute, unmute, warn, and warnings,");

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
    .addField("Admin Commands", "bothelp, poll, and prefix");

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
    .addField("Support Server Only Commands", "daily, and shop")

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
