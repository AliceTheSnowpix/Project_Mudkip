exports.run = async(bot, message, args, ops) => {
    if (!message.member.voiceChannel) {
        return message.reply("Sorry You are not connected to a voice channel");
    }
    else if (!message.guild.me.voiceChannel) {
        return message.reply("Sorry I am not in a voice channel");
    }
    else if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
        return message.reply("Sorry you are not in the same voice channel as me");
    }

    message.guild.me.voiceChannel.leave();
    message.channel.send("Leaving the voice channel");
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'stop'
}