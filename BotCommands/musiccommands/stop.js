exports.run = async(bot, message, _args) => {
  	const queue = bot.queue;
  	let voiceChannel = message.member.voice.channel;
	const serverQueue = queue.get(message.guild.id);
	if (!voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
	if (serverQueue && message.guild.member(bot.user).voice.channel) {
		voiceChannel.leave();
		return message.channel.send('I have stoped the song and left the voice channel.');
	} else if (serverQueue) {
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.destroy();
		voiceChannel.leave();
		return message.channel.send('I have cleared the queue and left the voice channel.');
	} else {
		return message.channel.send('There is currently nothing for me to stop.');
	}
}

exports.help = {
    name: 'stop'
}