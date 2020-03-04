exports.run = async (bot,message,args) => {
    const ytdl = bot.ytdl
    let voiceChannel = message.member.voice.channel;

    if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.channel.send("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }
    else if (!voiceChannel) {
        return message.reply("please join a voice chat to use this command")
    }
    await message.channel.send("Song Loading Please Wait")

voiceChannel.join().then(connection =>
{
    const dispatcher = connection.play(ytdl('https://youtu.be/LPpgxBkDYfY'));
    dispatcher.on('finish', end => {
        voiceChannel.leave();
    })
    }).catch(err => console.log(err));
}

exports.help = {
    name: "cosmic"
}
