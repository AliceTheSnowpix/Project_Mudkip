const ytdl = require("ytdl-core");
const discord = require("discord.js");

exports.run = async(bot, message, args, ops) => {
    var voiceChannel = message.member.voiceChannel;

    if (!message.member.voiceChannel){
        return message.reply("**Please join a voice chat to use this command**");
    }
    else if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.reply("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }
    
    if (!args[0])
        return message.reply("Sorry you need to send a url");

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) {
        let commandFile = require('./search.js');
        return commandFile.run(bot, message, args, ops)
    }

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id
    data.queue.push({
        songTitle: info.title,
        requester: message.author.username,
        url: args[0],
        announceChannel: message.channel.id,
        thumbnail: info.thumbnail_url,
        timestamp: info.published,
    });

    if (!data.dispatcher) play(bot, ops, data);
    else 
    {
        let qembed = new discord.RichEmbed()
        .setTitle(`Song Added: ${info.title}`)
        .setAuthor(`Song Requested by: ${message.author.username}`)
        .setColor("RANDOM")
        .setThumbnail(`${info.thumbnail_url}`)
        .setTimestamp(info.timestamp)
        .addField('Video Link', `${info.video_url}`)
    
        message.channel.send(qembed);
    }

    ops.active.set(message.guild.id, data);

}

async function play(bot, ops, data, connection, message) {
    let playembed = new discord.RichEmbed()
        .setTitle(`Now Playing: ${data.queue[0].songTitle}`)
        .setAuthor(`Song Requested by: ${data.queue[0].requester}`)
        .setColor("RANDOM")
        .setThumbnail(`${data.queue[0].thumbnail}`)
        .setTimestamp(data.queue[0].timestamp)
        let commandFile = require('./search.js');
        if (commandFile){playembed.addField('Video Link', `https://www.youtube.com${data.queue[0].url}`)}
        else if (!commandFile){playembed.addField('Video Link', `${data.queue[0].url}`)}
        bot.channels.get(data.queue[0].announceChannel).send(playembed);
        data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly'}));
        data.dispatcher.guildID = data.guildID;
        data.queue.shift();
        data.dispatcher.once('end', function() {
            let commandFile2 = require('./stop.js');
            if (data.queue[0].url) play(bot, ops, data, connection, message)
            else return commandFile2.run(bot, message, args, ops)
    })
}

exports.config = {
    aliases: [ 'p' ]
};

exports.help = {
    name: 'play'
}