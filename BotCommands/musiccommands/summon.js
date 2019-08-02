<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.run = async(bot, message, args) => {    
    var voiceChannel = message.member.voiceChannel;

    if (!message.member.voiceChannel) {
        return message.reply("Sorry You are not connected to a voice channel");
    }

    else if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.reply("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }

    voiceChannel.join()
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'summon'
<<<<<<< HEAD
=======
=======
exports.run = async(bot, message, args) => {    
    var voiceChannel = message.member.voiceChannel;

    if (!message.member.voiceChannel) {
        return message.reply("Sorry You are not connected to a voice channel");
    }

    else if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.reply("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }

    voiceChannel.join()
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'summon'
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}