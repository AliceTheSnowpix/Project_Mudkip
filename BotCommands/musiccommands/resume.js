exports.run = async(bot, message, args) => {
  const queue = bot.queue;
		const serverQueue = queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('Resuming the music');
		}
		return message.channel.send('There is nothing to resume');
	
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'resume'
}
