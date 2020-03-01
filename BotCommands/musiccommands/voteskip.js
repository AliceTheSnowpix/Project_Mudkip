exports.run = async(bot, message, _args) => {
	  const queue = bot.queue;
	  const serverQueue = queue.get(message.guild.id);

		if (!message.member.voiceChannel) return message.channel.send('Please connect to the same voice channel as me to use this command.');
		if (!serverQueue) return message.channel.send('There is nothing to skip');

		if (message.member.voiceChannel.members.size === 2) {
        message.channel.send('Song skipped');
        await serverQueue.connection.dispatcher.destroy();
        return;
    }
    
    let voters = []
    let skipnumber = 0
    
    if(message.member.voiceChannel.size === 3) {
        skipnumber += 1;
        voters += message.author.id;
        message.channel.send(`${message.author.username} has voted to skip the current song ${skipnumber}/2 votes needed to skip`)
    }
    if (voters.forEach(voter => {
        voter === message.author.id;
    })) return message.channel.send('you have already voted');
    if (skipnumber === 2) {
        message.channel.send('song skiped')
        await serverQueue.connection.dispatcher.destroy();
        return;
    }
}

exports.help = {
    name: 'voteskip'
}