exports.run = async (bot,message,args) => {
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
    const dispatcher = playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Fbreak.mp3?1544921325229');
    if (dispatcher.on("speaking", speaking => speaking == true)){
    } 
    if (dispatcher.on('end', end => {
      dispatcher = playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Fentropy.mp3?1544921239890')
      dispatcher.on('end', end => {
      dispatcher = playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Ffireflies.mp3?1544921586964')
      }
    }))
    }).catch(err => console.log(err));
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: "cloroxmix"
}