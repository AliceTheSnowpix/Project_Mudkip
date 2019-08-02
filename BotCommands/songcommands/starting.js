<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
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
    const dispatcher = connection.playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Fstarting.mp3?1544922680745');
    dispatcher.on('end', end => {
        voiceChannel.leave();
    })
    }).catch(err => console.log(err));
    isReady = true;
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "starting"
}
<<<<<<< HEAD
=======
=======
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
    const dispatcher = connection.playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Fstarting.mp3?1544922680745');
    dispatcher.on('end', end => {
        voiceChannel.leave();
    })
    }).catch(err => console.log(err));
    isReady = true;
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "starting"
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
