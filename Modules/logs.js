module.exports = bot => {
	const db = bot.db;
	const GuildSettings = new db.table('GuildSetting');
	
	bot.on('guildMemberAdd', async member => {
		let defaultEmbed = new bot.discord.MessageEmbed()
		.setTitle('**New User!**')
		.setColor('#ff8ef5')
		.setTimestamp()
		.setDescription(`Welcome to **${member.guild.name}**, **<@${member.user.id}>** Hope you have a good time here.`);

		let welcomeEmbed = new bot.discord.MessageEmbed()
		.setTitle('**New User!**')
		.setColor('#ff8ef5')
		.setTimestamp()
		.addField(`Welcome To ${member.guild.name}`, `<@${member.user.id}> Please read the rules`)

		if (member.guild.id !== '543906288820682752') {
			const wc = await GuildSettings.fetch(`welcomechannel_${member.guild.id}`);
			const wm = await GuildSettings.fetch(`welcomemessage_${member.guild.id}`);
			const ar = await GuildSettings.fetch(`autorole_${member.guild.id}`);
			const channel = member.guild.channels.cache.get(wc);
			const role = member.guild.roles.cache.get(ar);
			if (!channel) return;
			if (!role) return;
			else member.guild.members.cache.get(member.user.id).addRole(role)
			if (wm === 'not set') channel.send(defaultEmbed);
			else channel.send(wm).catch(console.error);
		} else member.guild.channels.cache.get('559536623621111818').send(welcomeEmbed).catch(console.error);
	});
	
	bot.on('guildMemberRemove', async member => {
		let defaultEmbed = new bot.discord.MessageEmbed()
		.setTitle('**User Left!**')
		.setColor('#93f7ff')
		.setTimestamp()
		.setDescription(`Goodbye ${member.user.username} hope you had fun here.`)

		let leaveEmbed = new bot.discord.MessageEmbed()
		.setTitle('**User Left!**')
		.setColor('#93f7ff')
		.setTimestamp()
		.setDescription(`It's been fun but **__${member.user.username}__** left the server`)

		if (member.guild.id !== '543906288820682752') {
			const lc = await GuildSettings.fetch(`leavechannel_${member.guild.id}`);
			const lm = await GuildSettings.fetch(`leavemessage_${member.guild.id}`);
			const channel = member.guild.channels.cache.get(lc);
			if (!channel) return;
			if (lm === 'not set') channel.send(defaultEmbed);
			else channel.send(lm).catch(console.error);
		} else member.guild.channels.cache.get('559536623621111818').send(leaveEmbed); 
	});
	
	bot.on('guildCreate', async guild => {
		const prefix = await GuildSettings.fetch( `prefix_${guild.id}`);
		const wc = await GuildSettings.fetch(`welcomechannel_${guild.id}`);
		const wm = await GuildSettings.fetch(`welcomemessage_${guild.id}`);
		const lc = await GuildSettings.fetch(`leavechannel_${guild.id}`);
		const lm = await GuildSettings.fetch(`leavemessage_${guild.id}`);
		const mc = await GuildSettings.fetch(`logchannel_${guild.id}`);
		const mr = await GuildSettings.fetch(`modrole_${guild.id}`);
		const ar = await GuildSettings.fetch(`autorole_${guild.id}`);
		const song = await GuildSettings.fetch(`song_${guild.id}`);
		const queue = await GuildSettings.fetch(`queue_${guild.id}`);
		const off = await GuildSettings.fetch(`noloop_${guild.id}`);

		if (prefix !== undefined && wc !== undefined && wm !== undefined && lc !== undefined && lm !== undefined && mc !== undefined && mr !== undefined && ar !== undefined && song !== undefined && queue !== undefined && off  !== undefined
		|| prefix !== null && wc !== null && wm !== null && lc !== null && lm !== null && mc !== null && mr !== null && ar !== null && song !== null && queue !== null && off !== null) return;
		else {
			GuildSettings.set( `prefix_${guild.id}`, ';');
			GuildSettings.set(`welcomechannel_${guild.id}`, 'not set');
			GuildSettings.set(`welcomemessage_${guild.id}`, 'not set');
			GuildSettings.set(`leavechannel_${guild.id}`, 'not set');
			GuildSettings.set(`leavemessage_${guild.id}`, 'not set');
			GuildSettings.set(`logchannel_${guild.id}`, 'not set');
			GuildSettings.set(`modrole_${guild.id}`, 'not set');
			GuildSettings.set(`autorole_${guild.id}`, 'not set');
			GuildSettings.set(`song_${guild.id}`, false);
			GuildSettings.set(`queue_${guild.id}`, false);
			GuildSettings.set(`noloop_${guild.id}`, true);
		}
	});
}