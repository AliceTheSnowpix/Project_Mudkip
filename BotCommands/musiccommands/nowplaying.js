exports.run = async(bot, message, _args) => {
    const queue = bot.queue;
		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing is currently playing');
		const nowplaying = `**${serverQueue.songs[0].title}**`;
		return message.channel.send(nowplaying);
}

exports.help = {
    name: 'nowplaying',
    aliases: ['np']
}