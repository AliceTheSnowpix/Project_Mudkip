exports.run = async (bot,message,args) => {
<<<<<<< HEAD
    const ytdl = bot.ytdl;
    let voiceChannel = message.member.voiceChannel;
=======
    var voiceChannel = message.member.voiceChannel;
>>>>>>> 43d047b4f6843e8aa927bad6893863cf850882a2

    if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.channel.send("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }

    await message.channel.send("Song Loading Please Wait")
    if (!voiceChannel)
        return message.reply("please join a voice chat to use this command")
    
        
voiceChannel.join().then(connection =>
{
<<<<<<< HEAD
    const dispatcher = connection.playStream(ytdl('https://youtu.be/qpQSjf-0Lc8'));
=======
    const dispatcher = connection.playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Fbroken.mp3?1544921307027');
>>>>>>> 43d047b4f6843e8aa927bad6893863cf850882a2
    dispatcher.on('end', end => {
        voiceChannel.leave();
    })
    }).catch(err => console.log(err));
}

<<<<<<< HEAD
=======
exports.config = {
    aliases: [  ]
};

>>>>>>> 43d047b4f6843e8aa927bad6893863cf850882a2
exports.help = {
    name: "broken"
}
