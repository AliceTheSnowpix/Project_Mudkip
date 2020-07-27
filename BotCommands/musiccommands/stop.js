exports.run = async(bot, message, _args) => {
  	const queue = bot.queue;
  	let voiceChannel = message.member.voice.channel;
	const serverQueue = queue.get(message.guild.id);
	if (!voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
	if (serverQueue) {
		serverQueue.connection.dispatcher.end();
		serverQueue.songs = [];
		voiceChannel.leave();
		return message.channel.send('The music has been stopped.');
	} else {
		return message.channel.send('There is currently nothing for me to stop.');
	}
}

exports.help = {
    name: 'stop'
}