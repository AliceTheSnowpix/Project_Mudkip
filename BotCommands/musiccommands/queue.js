const discord = require('discord.js');

exports.run = async(bot, message, args) => {
  const queue = bot.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!serverQueue || serverQueue.songs.length === 0) return message.channel.send('There is currently nothing in the queue.');
<<<<<<< HEAD
=======

>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
	const nowplaying = serverQueue.songs[0].title;
	const songqueue = serverQueue.songs[0].title;
	const queueEmbed = new discord.RichEmbed()
		.setColor('#009696')
    .setTitle(`Current song: ${nowplaying}`)
		.setDescription(`${serverQueue.songs.slice(1, 16).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`)
<<<<<<< HEAD
  message.channel.send(queueEmbed).then(msg => {
    if (serverQueue.songs.length > 15) {
		  const reaction1 = msg.react('◀');
		  const reaction2 = msg.react('▶');
		  let first = 1;
		  let second = 16;

		  const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id, {
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
          msg.edit(newEmbed);
			  } else if (r.emoji.name === '◀' && reactionremove !== 0) {
				  r.remove(message.author.id);
				  first -= 15;
				  second -= 15;

				  const newEmbed = new discord.RichEmbed()
					.setColor('#009696')
          .setTitle(`Current song: ${nowplaying}`)
				  .setDescription(`${serverQueue.songs.slice(first, second).map(song => `**${serverQueue.songs.indexOf(song)}** ${song.title}`).join('\n')}`);
				  msg.edit(newEmbed);
			  }
		  });
	    collector.on('end', () => {
			  reaction1.remove();
			  reaction2.remove();
		  });
	  }
  })
} 
=======
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
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d

exports.config = {
    aliases: ['q']
};

exports.help = {
<<<<<<< HEAD
  name: "queue",
  aliases: ['q']
=======
    name: "queue"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
}
