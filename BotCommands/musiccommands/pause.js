<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.run = async(bot, message, args) => {
  const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('The song has been paused');
		}
		return message.channel.send('There is nothing to pause');
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'pause'
<<<<<<< HEAD
}
=======
}
=======
exports.run = async(bot, message, args) => {
  const queue = bot.queue;
  const serverQueue = queue.get(message.guild.id);
	if (serverQueue && serverQueue.playing) {
		serverQueue.playing = false;
		serverQueue.connection.dispatcher.pause();
		return message.channel.send('The song has been paused');
	}
	return message.channel.send('There is nothing to pause');
}

exports.config = {
   aliases: [  ]
};

exports.help = {
   name: 'pause'
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
