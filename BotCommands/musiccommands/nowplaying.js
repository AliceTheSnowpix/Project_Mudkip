exports.run = async(bot, message, args) => {
  const queue = bot.queue;
		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing is currently playing');

		const nowplaying = `**${serverQueue.songs[0].title}**`;
		return message.channel.send(nowplaying);
}

exports.config = {
    aliases: [ 'np' ]
};

exports.help = {
  name: 'nowplaying',
  aliases: ['np']
}