exports.run = async(bot, message, _args) => {
  	const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!serverQueue || serverQueue.songs.length === 0) return message.channel.send('There is currently nothing in the queue.');
	const nowplaying = serverQueue.songs[0].title;
	const songqueue = serverQueue.songs[0].title;
	const queueEmbed = new bot.discord.MessageEmbed()
	.setColor('#009696')
    .setTitle(`Current song: ${nowplaying}`)
	.setDescription(`${serverQueue.songs.slice(1, 16).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`);
  	message.channel.send(queueEmbed).then(async msg => {
    	if (serverQueue.songs.length > 15) {
			const reaction1 = await msg.react('614293189825789972');
			const reaction2 = await msg.react('614293189720801290');
		  	let first = 1;
		  	let second = 16;
			const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id, {
				time: 120000
			});
			collector.on('collect', r => {
				const reactionadd = serverQueue.songs.slice(first + 15, second + 15).length;
				const reactionremove = serverQueue.songs.slice(first - 15, second - 15).length;
				
				if (r.emoji.name === 'Arrow_Right' && reactionadd !== 0) {
					r.remove(message.author.id);
				  	first += 15;
					second += 15;
					const newEmbed = new bot.discord.MessageEmbed()
				   	.setColor('#009696')
				   	.setTitle(`Current song: ${nowplaying}`)
					.setDescription(`${serverQueue.songs.slice(first, second).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`);
					msg.edit(newEmbed);
					  
			  	} else if (r.emoji.name === 'Arrow_Left' && reactionremove !== 0) {
				  	r.remove(message.author.id);
				  	first -= 15;
				  	second -= 15;
					const newEmbed = new bot.discord.MessageEmbed()
					.setColor('#009696')
					.setTitle(`Current song: ${nowplaying}`)
					.setDescription(`${serverQueue.songs.slice(first, second).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`);
					msg.edit(newEmbed);
			  	}
		  	});
			collector.on('finish', () => {
				reaction1.remove();
				reaction2.remove();
		  	});
	  	}
  	})
} 

exports.help = {
	name: "queue",
	aliases: ['q']
}
