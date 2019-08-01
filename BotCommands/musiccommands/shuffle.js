exports.run = async(bot, message, args,) => {
  const shuffle = a => a.reduce((l, e, i) => {
			const j = Math.floor(Math.random() * (a.length - i) + i);
			[a[i], a[j]] = [a[j], a[i]];
			return a;
		}, a);
		const fixedAllDifferentShuffle = (a, f) => {
			// memorize position of fixed elements
			const fixed = a.reduce((acc, e, i) => {
				if (f[i]) acc.push([e, i]);
				return acc;
			}, []);
			a = shuffle(a);
			// swap fixed elements back to their original position
			fixed.forEach(([item, initialIndex]) => {
				const currentIndex = a.indexOf(item);
				[a[initialIndex], a[currentIndex]] = [a[currentIndex], a[initialIndex]];
			});
			return a;
		};
  
  const queue = bot.queue;
		const serverQueue = queue.get(message.guild.id);

		if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channel as me.');
		if (!serverQueue || !serverQueue.songs.length) return message.channel.send('There is nothing to shuffle');

		serverQueue.songs = fixedAllDifferentShuffle(serverQueue.songs, [true]);

		message.channel.send('The queue jas been shuffled');
}

exports.config = {
  aliases: []
}

exports.help = {
  name: 'shuffle'
<<<<<<< HEAD
}
=======
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
