exports.run = async(bot, message, args) => {
  const queue = bot.queue;
  let voiceChannel = message.member.voiceChannel;
	const serverQueue = queue.get(message.guild.id);
	if (!voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
	if (serverQueue) {
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.destroy();
		return message.channel.send('I have cleared the queue and left the voice channel.');
	} else if (message.guild.member(bot.user).voiceChannel) {
		voiceChannel.leave();
		return message.channel.send('I have stoped the song and left the voice channel.');
	} else {
		return message.channel.send('There is currently nothing for me to stop.');
	}
}

exports.help = {
    name: 'stop'
}