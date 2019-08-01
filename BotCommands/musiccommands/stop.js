exports.run = async(bot, message, args) => {
  const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
	if (!serverQueue) return message.channel.send('there is nothing to stop.');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.destroy();
	return message.channel.send('I have cleared the queue and left the voice channel.')
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'stop'
}