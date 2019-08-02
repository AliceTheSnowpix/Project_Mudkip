<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.run = async(bot, message, args) => {
  const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
	if (!serverQueue) return message.channel.send('there is nothing to stop.');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.destroy();
	return message.channel.send('I have cleared the queue and left the voice channel.')
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'stop'
<<<<<<< HEAD
}
=======
}
=======
exports.run = async(bot, message, args) => {
  const queue = bot.queue;
  const serverQueue = queue.get(message.guild.id);
  if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channle as me.');
  if (!serverQueue) return message.channel.send('there is nothing to stop.');
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.destroy();
  return message.channel.send('I have cleared the queue and left the voice channel.')
}

exports.config = {
   aliases: [  ]
};

exports.help = {
   name: 'stop'
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
