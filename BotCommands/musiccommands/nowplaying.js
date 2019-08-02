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
<<<<<<< HEAD
  name: 'nowplaying',
  aliases: ['np']
}
=======
<<<<<<< HEAD
  name: 'nowplaying',
  aliases: ['np']
}
=======
    name: 'nowplaying'
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
