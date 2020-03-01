exports.run = async(bot, message, _args) => {
	const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channel as me.');
	if (!serverQueue) return message.channel.send('There is nothing to skip');
	await serverQueue.connection.dispatcher.destroy();
	message.channel.send('I have skipped the song');
}

exports.help = {
  name: 'forceskip',
  aliases: ['s']
}