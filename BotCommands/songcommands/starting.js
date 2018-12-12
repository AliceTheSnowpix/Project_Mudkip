module.exports.run = async (bot,message,args,guilds) => {
    var voiceChannel = message.member.voiceChannel;

    if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.channel.send("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }    

    await message.channel.send("Song Loading Please Wait")
    var VC = message.member.voiceChannel;
    if (!VC)
        return message.reply("please join a voice chat to use this command")
    
voiceChannel.join().then(connection =>
{
    const dispatcher = connection.playFile('./Audio/starting.mp3');
    if (dispatcher.on("speaking", speaking => dispatcher)){
    }else{
    dispatcher.on("end", end => voiceChannel.leave());
    }
    }).catch(err => console.log(err));
    isReady = true;
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "starting"
}