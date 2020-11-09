exports.run = async(bot, message, args) => {
	const db = bot.db;
	const GuildSettings = new db.table('GuildSetting');
	const Shop = new db.table('Shop');

	let serverID = (456629010890227714)
	if (message.guild.id != serverID) {
		let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
		if (!prefix) {
			GuildSettings.set(`prefix_${message.guild.id}`, ';');
			prefix = ';';
		}
	
		let cmd = String(message.content.slice(prefix.length).toLowerCase().split(' ').slice(1, 2).join(' ').toLowerCase());
		let items = await Shop.fetch(`shopItems_${message.guild.id}`);
		if (!cmd) {
			let shopEmbed = new bot.discord.MessageEmbed()
			.setTitle(`**${message.guild.name}** Server Shop`)
			.setColor('RANDOM')
			.setDescription('To buy an item use the command ;buy <item position>')
			.setTimestamp();

			if (items === null) {
				Shop.set(`shopItems_${message.guild.id}`, []);
				return message.channel.send('There is currently no items on the shop');
			}
			if (items[0] === undefined) return message.channel.send('There is currently no items on the shop');

			if (message.guild.roles.cache.get(items[0].item)) shopEmbed.addField(`${items[0].name}`, `<@&${items[0].item}>, You need **${items[0].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[0].item)) shopEmbed.addField(`${items[0].name}`, `<#${items[0].item}>, You need **${items[0].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[0].name}`, `**${items[0].item}**, You need **${items[0].cost}** bubbles for this item.`);
			
			if (items[1] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[1].item)) shopEmbed.addField(`${items[1].name}`, `<@&${items[1].item}>, You need **${items[1].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[1].item)) shopEmbed.addField(`${items[1].name}`, `<#${items[1].item}>, You need **${items[1].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[1].name}`, `**${items[1].item}**, You need **${items[1].cost}** bubbles for this item.`);
			
			if (items[2] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[2].item)) shopEmbed.addField(`${items[2].name}`, `<@&${items[2].item}>, You need **${items[2].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[2].item)) shopEmbed.addField(`${items[2].name}`, `<#${items[2].item}>, You need **${items[2].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[2].name}`, `**${items[2].item}**, You need **${items[2].cost}** bubbles for this item.`);
			
			if (items[3] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[3].item)) shopEmbed.addField(`${items[3].name}`, `<@&${items[3].item}>, You need **${items[3].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[3].item)) shopEmbed.addField(`${items[3].name}`, `<#${items[3].item}>, You need **${items[3].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[3].name}`, `**${items[3].item}**, You need **${items[3].cost}** bubbles for this item.`);
			
			if (items[4] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[4].item)) shopEmbed.addField(`${items[4].name}`, `<@&${items[4].item}>, You need **${items[4].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[4].item)) shopEmbed.addField(`${items[4].name}`, `<#${items[4].item}>, You need **${items[4].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[4].name}`, `**${items[4].item}**, You need **${items[4].cost}** bubbles for this item.`);
			
			if (items[5] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[5].item)) shopEmbed.addField(`${items[5].name}`, `<@&${items[5].item}>, You need **${items[5].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[5].item)) shopEmbed.addField(`${items[5].name}`, `<#${items[5].item}>, You need **${items[5].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[5].name}`, `**${items[5].item}**, You need **${items[5].cost}** bubbles for this item.`);
			
			if (items[6] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[6].item)) shopEmbed.addField(`${items[6].name}`, `<@&${items[6].item}>, You need **${items[6].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[6].item)) shopEmbed.addField(`${items[6].name}`, `<#${items[6].item}>, You need **${items[6].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[6].name}`, `**${items[6].item}**, You need **${items[6].cost}** bubbles for this item.`);
			
			if (items[7] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[7].item)) shopEmbed.addField(`${items[7].name}`, `<@&${items[7].item}>, You need **${items[7].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[7].item)) shopEmbed.addField(`${items[7].name}`, `<#${items[7].item}>, You need **${items[7].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[7].name}`, `**${items[7].item}**, You need **${items[7].cost}** bubbles for this item.`);
			
			if (items[8] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[8].item)) shopEmbed.addField(`${items[8].name}`, `<@&${items[8].item}>, You need **${items[8].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[8].item)) shopEmbed.addField(`${items[8].name}`, `<#${items[8].item}>, You need **${items[8].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[8].name}`, `**${items[8].item}**, You need **${items[8].cost}** bubbles for this item.`);
			
			if (items[9] === undefined) shopEmbed;
			else if (message.guild.roles.cache.get(items[9].item)) shopEmbed.addField(`${items[9].name}`, `<@&${items[9].item}>, You need **${items[9].cost}** bubbles for this item.`);
			else if (message.guild.channels.cache.get(items[9].item)) shopEmbed.addField(`${items[9].name}`, `<#${items[9].item}>, You need **${items[9].cost}** bubbles for this item.`);
			else shopEmbed.addField(`${items[9].name}`, `**${items[9].item}**, You need **${items[9].cost}** bubbles for this item.`);
			return message.channel.send(shopEmbed);

		} else if (cmd === '--add') {
			if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Only server Admins can add items to the shop.');
			let addItem = args.join(' ').slice(6).split(', ');
			if (addItem.length !== 3) return message.channel.send(`Incorrect format. To add an item to the shop you need to type \`${prefix}shop --add <name>, <item>, <cost>\``);
			else if (isNaN(addItem[2])) return message.channel.send('You need to provide a number for the item cost.');
			else if (addItem[2] < 0) return message.channel.send('You can not make the item cost a negative number.');
			if (items === null) Shop.set(`shopItems_${message.guild.id}`, []);
			if (items.length >= 10) return message.channel.send('You can only have 10 shop items at a time.');
			else {
				Shop.push(`shopItems_${message.guild.id}`, {name: addItem[0], item: addItem[1], cost: addItem[2]});
				message.channel.send(`You have successfully added ${addItem[0]} to the shop.`);
			}
		} else if (cmd === '--remove') {
			if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Only server Admins can add items to the shop.');
			if (items[0] === undefined) return message.channel.send('There is no items on the shop for you to remove.');
			let removeItem = args.join(' ').slice(9);
			if (!removeItem || isNaN(removeItem)) return message.channel.send('Please provide the position of the item you want to remove.');
			if (removeItem > items.length) return message.channel.send(`There is only ${items.length} items on the shop.`);
			let i = removeItem - 1;
			let filteredItems = items.slice(0, i).concat(items.slice(i + 1, items.length));
			message.channel.send(`${items[i].name} has successfully be removed.`);
			Shop.set(`shopItems_${message.guild.id}`, filteredItems);

		} else if (cmd === '--reset') {
			if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Only server Admins can add items to the shop.');
			if (items[0] === undefined) return message.channel.send('The shop is already empty.');
			Shop.set(`shopItems_${message.guild.id}`, []);
			message.channel.send('The shop has successfully been reset.');
		} else if (cmd === '--help') {
			let helpEmbed = new bot.discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Shop Help Menu')
			.addFields([{name: `${prefix}shop`, value: 'Shows the shop for the server.'},
						{name: `${prefix}shop --add <name>, <item>, <cost>`, value: 'Adds an item to the shop, you can add up to 10 items.'},
						{name: `${prefix}shop --remove <item position>`, value: 'Removes an item from the shop.'},
						{name: `${prefix}shop --help`, value: 'Shows you this.'}]);
			message.channel.send(helpEmbed);
		}
	} else {
		let shopembed = new bot.discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('here are all shop items')
		.setDescription('To buy an item use the commad ;buy <shop item number>')
		.addField("Shop Item 1", '<@&481129804347867165> you need to pop 10 bubbles to buy this role.')
		.addField("Shop Item 2", "<@&481581654167781392> you need to pop 25 bubbles to buy this role.")
		.addField("Shop Item 3", "<@&481609753651576842> you need to pop 50 bubbles to buy this role.")
		.addField("Shop Item 4", "<@&481609899206508545> you need to pop 100 bubbles to buy this role.")
		.addField("Shop Item 5", "<@&481610167083991071> you need to pop 200 bubbles to buy this role.")
		.addField("Shop Item 6", "<@&481614285416431617> you need to pop 300 bubbles to buy this role.")
		.addField("Shop Item 7", "<@&481615302459785216> you need to pop 400 bubbles to buy this role.")
		.addField("Shop Item 8", "<@&481613362099126273> you need to pop 500 bubbles to buy this role.")
		.addField("Shop Item 9", "<@&481616059930247169> you need to pop 1000 bubbles to buy this role.")
		.addField("Shop Item 10", "<@&481615070930010122> you need to pop 5000 bubbles to buy this role.")
		.addField("Shop Item 11", "<#483550966965075968> you need to pop and pay 10000 bubbles to talk in this channel")
		.addField("Shop Item 12", "<#483551789254311937> you need to pop and pay 5 bubbles to talk in the channel")
		.addField("NOTE", "**to pop bubbles do the ;bubble command in <#481178520718934026> you can pop one bubble every 30 seconds.**")
		.setTimestamp(message.createdAt)
		message.channel.send(shopembed);
	}
}

exports.help = {
  	name: 'shop'
}