const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const blacklist = [];

module.exports = async(bot, message) => {
	const GuildSettings = new db.table('GuildSettings');
	if(blacklist.includes(message.author.id) || message.author.bot) return;
	let dmembed = new MessageEmbed()
		.setTitle(message.author.username)
		.setColor('RANDOM')
		.setAuthor(message.author.id)
		.setDescription(message.content);
	if (message.channel.type === 'dm') {
		let defaultPefix = ';'
		const mention = new RegExp(`^<@!?${bot.user.id}>`);
		const prefix = message.content.match(mention) ? message.content.match(mention)[0] : defaultPefix;
		if (message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			let cmd = args.shift().toLowerCase();
			let command = bot.commands.get(cmd);
			let aliase = bot.aliases.get(cmd);
			if (command) command.run(bot, message, args);
			if (aliase) aliase.run(bot, message, args);
		} else bot.users.cache.get('293148538886553602').send(dmembed);
	} else if (message.channel.type === 'text') {
		let customPrefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
		if (customPrefix === null) {
			GuildSettings.set(`prefix_${message.guild.id}`, ';');
			customPrefix = ';';
		}
	
		const mention = new RegExp(`^<@!?${bot.user.id}>`);
		const prefix = message.content.match(mention) ? message.content.match(mention)[0] : customPrefix;
		if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		let cmd = args.shift().toLowerCase();
		let command = bot.commands.get(cmd);
		let aliase = bot.aliases.get(cmd);
		if (command) command.run(bot, message, args);
		if (aliase) aliase.run(bot, message, args);
	}
}