module.exports.run = async (bot,message,args) => {
    var voiceChannel = message.member.voiceChannel;

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
    const dispatcher = connection.playStream('https://cdn.glitch.com/88f6bd80-960a-4d7a-9bef-4ad9e2596329%2FStory.mp3?1544754598107');
    if (dispatcher.on("speaking", speaking => speaking == true)){
        dispatcher
    } 
    if (dispatcher.once('end', end => end == voiceChannel.leave())){ 
    }
    }).catch(err => console.log(err));
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "story"
}
