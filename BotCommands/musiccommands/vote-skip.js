exports.run = async(bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) {
        return message.reply("There is no music currently playing");
    }
    else if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
        return message.reply("Sorry you are not in the same voice channel as me");
    }

    let usercount = message.member.voiceChannel.members.size;

    let required = Math.ceil(usercount/2);

    if (!fetched.queue[0].voteSkips) 
    return fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id))
        return message.reply(`Sorry You already vote to skip this song ${fetched.queue[0].voteSkips.length}/${required} votes required to skip`);
        
    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) {
        message.channel.send("The Song was skipped");
        return fetched.dispatcher.emit('end')
    }

    message.reply(`You have voted to skip the song ${fetched.queue[0].voteSkips.length}/${required} votes required to skip`);
}

exports.config = {
    aliases: [ 'skip', 'vs', 'v' ]
};

exports.help = {
    name: 'voteskip',
}