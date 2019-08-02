const discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');
const { Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
const db = require('quick.db');
require('dotenv').config();
const youtube = new YouTube(process.env.YOUTUBE);
const songloop = new db.table('SONGLOOP');
const queueloop = new db.table('QUEUELOOP');
const noloop = new db.table('NOLOOP');
<<<<<<< HEAD
=======
=======
require('dotenv').config();
const youtube = new YouTube(process.env.YOUTUBE);
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097

exports.run = async(bot, message, args) => {
  const queue = bot.queue;
  const input = message.content.split(' ');
	const searchString = input.slice(1).join(' ');
	const url = input[1] ? input[1].replace(/<(.+)>/g, '$1') : '';
	moment.locale(message.guild.id);
  
  const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('Please connect to a voice channel before using this command');
  
  async function play(guild, song) {
		const serverQueue = await queue.get(message.guild.id);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    let sloop = await songloop.fetch(`song_${message.guild.id}`);
    let qloop = await queueloop.fetch(`queue_${message.guild.id}`);
    let off = await noloop.fetch(`noloop_${message.guild.id}`);
    if (sloop === null) songloop.set(`song_${message.guild.id}`, false);
    if (qloop === null) queueloop.set(`queue_${message.guild.id}`, false);
    if (off === null) noloop.set(`noloop_${message.guild.id}`, false);
<<<<<<< HEAD
=======
=======
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
		if (!song) {
			await voiceChannel.leave();
			await queue.delete(message.guild.id);
			return;
    }
    
    const stream = await ytdl(song.url, {
      filter: 'audioonly'
    });
		const dispatcher = await serverQueue.connection.playStream(stream)
			.on('end', async reason => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
        if (sloop === true) {
          serverQueue.songs.push(serverQueue.songs[0]);
          serverQueue.songs.pop();
        } 
        if (qloop === true) serverQueue.songs.push(serverQueue.songs.shift());
        if (reason === 'Stream is not generating quickly enough.' && off === true) serverQueue.songs.shift('Stream is not generating quickly enough');
			  await play(guild, serverQueue.songs[0]);
			})
			.on('error', error => console.error(error));
  
<<<<<<< HEAD
=======
=======
				if (reason === 'Stream is not generating quickly enough.');
				serverQueue.songs.shift('Stream is not generating quickly enough');
			  await play(guild, serverQueue.songs[0]);
			})
			.on('error', error => console.error(error));

>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
		const duration = song.duration;
		const published = song.publishedat;
		const embed = new discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription(duration)
			.setThumbnail(song.thumbnail)
			.setColor('#009900')
			.setURL(song.url)
			.setFooter(published)
			.setTitle(song.title)
		message.channel.send(embed);
  }
  
  async function handleVideo(video, playlist) {
			const serverQueue = queue.get(message.guild.id);
			const song = {
			duration: moment.duration(video.duration).format(`d[ days], h[ hours], m[ minutes and] s[ seconds]`),
			thumbnail: video.thumbnails.default.url,
			publishedat: video.publishedAt,
			id: video.id,
			title: Util.escapeMarkdown(video.title.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
				.replace(/&quot;/g, '"')
				.replace(/&OElig;/g, 'Œ')
				.replace(/&oelig;/g, 'œ')
				.replace(/&Scaron;/g, 'Š')
				.replace(/&scaron;/g, 'š')
				.replace(/&Yuml;/g, 'Ÿ')
				.replace(/&circ;/g, 'ˆ')
				.replace(/&tilde;/g, '˜')
				.replace(/&ndash;/g, '–')
				.replace(/&mdash;/g, '—')
				.replace(/&lsquo;/g, '‘')
				.replace(/&rsquo;/g, '’')
				.replace(/&sbquo;/g, '‚')
				.replace(/&ldquo;/g, '“')
				.replace(/&rdquo;/g, '”')
				.replace(/&bdquo;/g, '„')
				.replace(/&dagger;/g, '†')
				.replace(/&Dagger;/g, '‡')
				.replace(/&permil;/g, '‰')
				.replace(/&lsaquo;/g, '‹')
				.replace(/&rsaquo;/g, '›')
				.replace(/&euro;/g, '€')
				.replace(/&copy;/g, '©')
				.replace(/&trade;/g, '™')
				.replace(/&reg;/g, '®')
				.replace(/&nbsp;/g, ' ')),
			url: `https://www.youtube.com/watch?v=${video.id}`
		};
    
    if (serverQueue) {
			await serverQueue.songs.push(song);
			if (playlist) return;
				
      const duration = song.duration;
			const published = song.publishedat;
			const embed = new discord.RichEmbed()
				.setAuthor(message.author.username)
				.setDescription(duration)
				.setThumbnail(song.thumbnail)
				.setColor('#009900')
				.setURL(song.url)
				.setFooter(published)
				.setTitle(song.title);
			message.channel.send(embed);
		} else {
		  const queueConstruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 2,
				playing: true
			};
			await queue.set(message.guild.id, queueConstruct);
			await queueConstruct.songs.push(song);

			try {
				const connection = await voiceChannel.join();
				queueConstruct.connection = connection;
				await play(message.guild, queueConstruct.songs[0]);
			} catch (error) {
				console.log(error);
				await queue.delete(message.guild.id);
				return message.channel.send('I can\'t join the voice channel you are in.');
			}
    }
  }
  
  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
		const playlist = await youtube.getPlaylist(url);
		const videos = await playlist.getVideos();
		const serverQueue = queue.get(message.guild.id);

		for (const video of Object.values(videos)) {
			const video2 = await youtube.getVideoByID(video.id);
			await handleVideo(video2, true);
		}
		const playlistadded = `**${playlist.title}**`;
		return message.channel.send(playlistadded);
	}
	let video;
	try {
		video = await youtube.getVideo(url);
	} catch (error) {
		try {
			const videos = await youtube.searchVideos(searchString, 10);

			if (videos.length === 0) return message.channel.send('could not find any videos');

			let index = 0;
			const embed = new discord.RichEmbed()
				.setColor('#7BB3FF')
				.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
					.replace(/&quot;/g, '"')
					.replace(/&OElig;/g, 'Œ')
					.replace(/&oelig;/g, 'œ')
					.replace(/&Scaron;/g, 'Š')
					.replace(/&scaron;/g, 'š')
					.replace(/&Yuml;/g, 'Ÿ')
					.replace(/&circ;/g, 'ˆ')
					.replace(/&tilde;/g, '˜')
					.replace(/&ndash;/g, '–')
					.replace(/&mdash;/g, '—')
					.replace(/&lsquo;/g, '‘')
					.replace(/&rsquo;/g, '’')
					.replace(/&sbquo;/g, '‚')
					.replace(/&ldquo;/g, '“')
					.replace(/&rdquo;/g, '”')
					.replace(/&bdquo;/g, '„')
					.replace(/&dagger;/g, '†')
					.replace(/&Dagger;/g, '‡')
					.replace(/&permil;/g, '‰')
					.replace(/&lsaquo;/g, '‹')
					.replace(/&rsaquo;/g, '›')
					.replace(/&euro;/g, '€')
					.replace(/&copy;/g, '©')
					.replace(/&trade;/g, '™')
					.replace(/&reg;/g, '®')
					.replace(/&nbsp;/g, ' ')}`).join('\n')}`)

			const embed2 = new discord.RichEmbed()
				.setColor('#0066CC')
				.setDescription('Please send a number between 1-10 to select a video');
			message.channel.send(embed);
			message.channel.send(embed2);

			let response;
			try {
				response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11 && message.author.id === msg2.author.id, {
					max: 1,
					time: 20000,
					errors: ['time']
				});
			} catch (err) {
				return message.channel.send('You either didnt send a number or the number is higher then 10.');
      }
		const videoIndex = parseInt(response.first().content, 10);
		video = await youtube.getVideoByID(videos[videoIndex - 1].id);
    } catch (err) {
			return message.channel.send('Could not find any videos');
		}
	}
  handleVideo(video, false);
}

<<<<<<< HEAD
exports.help = {
  name: 'play',
  aliases: ['p']
}
=======
<<<<<<< HEAD
exports.help = {
  name: 'play',
  aliases: ['p']
}
=======
exports.config = {
  aliases: [ 'p' ]
};

exports.help = {
  name: 'play'
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
