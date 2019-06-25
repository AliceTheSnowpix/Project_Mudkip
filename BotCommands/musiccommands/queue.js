const discord = require('discord.js');

exports.run = async(bot, message, args) => {
  const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!serverQueue || serverQueue.songs.length === 0) return message.channel.send('There is currently nothing in the queue.');

	const nowplaying = serverQueue.songs[0].title;
	const songqueue = serverQueue.songs[0].title;
	const queueEmbed = new discord.RichEmbed()
		.setColor('#009696')
    .setTitle(`Current song: ${nowplaying}`)
		.setDescription(`${serverQueue.songs.slice(1, 16).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`)
  message.channel.send(queueEmbed)
  
  /*if (serverQueue.songs.length > 15) {
		message.react('◀');
		message.react('▶');
		let first = 0;
		let second = 15;

		const collector = message.createReactionCollector((reaction, user) => user.id === message.author.id, {
			time: 120000
		});
		collector.on('collect', r => {
			const reactionadd = serverQueue.songs.slice(first + 15, second + 15).length;
			const reactionremove = serverQueue.songs.slice(first - 15, second - 15).length;

			if (r.emoji.name === '▶' && reactionadd !== 0) {
				r.remove(message.author.id);

				first += 15;
				second += 15;
          
				const newEmbed = new discord.RichEmbed()
					.setColor('#009696')
					.setTitle(`Current song: ${nowplaying}`)
				  .setDescription(`${serverQueue.songs.slice(first, second).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`);
        message.channel.send(newEmbed);
			} else if (r.emoji.name === '◀' && reactionremove !== 0) {
				r.remove(message.author.id);

				first -= 15;
				second -= 15;

				const newEmbed = new discord.RichEmbed()
					.setColor('#009696')
          .setTitle(`Current song: ${nowplaying}`)
				  .setDescription(`${serverQueue.songs.slice(first, second).map(song => `**-** ${song.title}`).join('\n')}`);
				message.channel.send(newEmbed);
			}
		});
		collector.on('end', () => {
			reaction1.users.remove();
			reaction2.users.remove();
		});
	}*/
}

exports.config = {
    aliases: ['q']
};

exports.help = {
    name: "queue"
}
