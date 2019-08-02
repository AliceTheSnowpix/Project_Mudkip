exports.run = async(bot, message, args) => {
	const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channel as me.');
	if (!serverQueue) return message.channel.send('There is nothing to skip');
	await serverQueue.connection.dispatcher.destroy();
}

exports.config = {
  aliases: []
}

exports.help = {
<<<<<<< HEAD
  name: 'forceskip',
  aliases: ['s']
}
=======
<<<<<<< HEAD
  name: 'forceskip',
  aliases: ['s']
}
=======
  name: 'forceskip'
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
