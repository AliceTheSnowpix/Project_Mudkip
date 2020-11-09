exports.run = async(bot, message, args) => {
	const db = bot.db;
	const GuildSettings = new db.table('GuildSetting');
	const UserInventory = new db.table('UserInventory');
	const Shop = new db.table('Shop');

	let selfbubbles = await db.fetch(`bubbles_${message.author.id}`);
	let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
	if (!prefix) {
		GuildSettings.set(`prefix_${message.guild.id}`, ';');
		prefix = ';';
	}

	let Member = message.guild.member(message.author.id);
	let arg = String(message.content.toLowerCase());
	let input = message.content.slice(prefix.length).toLowerCase().split(' ').slice(1).join(' ');

	if (message.guild.id === '456629010890227714') {
		if (input === '1' || arg === '<@460159835544092674> 1') {
			let cost = 10;
			if (Member.roles.cache.has('481129804347867165')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481129804347867165');
			message.reply(`I have gave you the <@&481129804347867165> role and removed ${cost} bubbles`);
		} else if (input === '2' || arg === '<@460159835544092674> 2') {
			let cost = 25;
			if (Member.roles.cache.has('481581654167781392')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481581654167781392');
			message.reply(`I have gave you the <@&481581654167781392> role and removed ${cost} bubbles`);
		} else if (input === '3' || arg === '<@460159835544092674> 3') {
			let cost = 50;
			if (Member.roles.cache.has('481609753651576842')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481609753651576842');
			message.reply(`I have gave you the <@&481609753651576842> role and removed ${cost} bubbles`);
		} else if (input === '4' || arg === '<@460159835544092674> 4') {
			let cost = 100;
			if (Member.roles.cache.has('481609899206508545')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481609899206508545');
			message.reply(`I have gave you the <@&481609899206508545> role and removed ${cost} bubbles`);
		} else if (input === '5' || arg === '<@460159835544092674> 5') {
			let cost = 200;
			if (Member.roles.cache.has('481610167083991071')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481610167083991071');
			message.reply(`I have gave you the <@&481610167083991071> role and removed ${cost} bubbles`);
		} else if (input === '6' || arg === '<@460159835544092674> 6') {
			let cost = 300;
			if (Member.roles.cache.has('481614285416431617')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481614285416431617');
			message.reply(`I have gave you the <@&481614285416431617> role and removed ${cost} bubbles`);
		} else if (input === '7' || arg === '<@460159835544092674> 7') {
			let cost = 400;
			if (Member.roles.cache.has('481615302459785216')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481615302459785216');
			message.reply(`I have gave you the <@&481615302459785216> role and removed ${cost} bubbles`);
		} else if (input === '8' || arg === '<@460159835544092674> 8') {
			let cost = 500;
			if (Member.roles.cache.has('481613362099126273')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481613362099126273');
			message.reply(`I have gave you the <@&481613362099126273> role and removed ${cost} bubbles`);
		} else if (input === '9' || arg === '<@460159835544092674> 9') {
			let cost = 1000;
			if (Member.roles.cache.has('481616059930247169')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481616059930247169');
			message.reply(`I have gave you the <@&481616059930247169> role and removed ${cost} bubbles`);
		} else if (input === '10' || arg === '<@460159835544092674> 10') {
			let cost = 5000;
			if (Member.roles.cache.has('481615070930010122')) return message.reply("you already have this item");
			if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
			db.subtract(`bubbles_${message.author.id}`, cost);
			Member.roles.add('481615070930010122');
			message.reply(`I have gave you the <@&481615070930010122> role and removed ${cost} bubbles`);
		} else if (input === '11' || arg === '<@460159835544092674> 11') {
			let cost = 10000;
			let getchannel = message.guild.channels.cache.get('483550966965075968');
			if(getchannel.permissionsFor(Member).cache.has('SEND_MESSAGES')) return message.reply('**you already have that item');
			if(cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy that')
			db.subtract(`bubbles_${message.author.id}`, cost);
			getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
			message.reply(`I have gave you access to the channel <#483550966965075968> and removed ${cost} bubbles`);
		} else if (input === '12' || arg === '<@460159835544092674> 12')  {
			let cost = 5;
			let getchannel = message.guild.channels.cache.get('483551789254311937');
			if (getchannel.permissionsFor(Member).cache.has('SEND_MESSAGES')) return message.reply('you already have that item');
			if (cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy this');
			db.subtract(`bubbels_${message.author.id}`, cost);
			getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
			message.reply(`I have gave you access to the channel <#483551789254311937> and removed ${cost} bubbles`);
		}
	} else {
		let inventory = await UserInventory.fetch(`userInv_${message.author.id}`);
		if (inventory === null || inventory === undefined) UserInventory.set(`userInv_${message.author.id}`, []);
		let items = await Shop.fetch(`shopItems_${message.guild.id}`);
		let buyItem = args.join(' ');
		if (items[0] === undefined) return message.channel.send('There is no items on the shop for you to buy.');
		if (!buyItem || isNaN(buyItem)) return message.channel.send('Please provide shop item position for the item you want to buy.');
		if (buyItem > items.length) return message.channel.send(`There is only ${items.length} items on the shop.`);
		if (message.guild.roles.cache.get(items[buyItem - 1].item)) {
			if (Member.roles.cache.has(items[buyItem - 1].item)) return message.channel.send('You already have this role.');
			if (selfbubbles < items[buyItem - 1].cost) return message.channel.send('You do not have enough bubbls for this item.');
			db.subtract(`bubbles_${message.author.id}`, items[buyItem - 1].cost);
			Member.roles.add(items[buyItem - 1].item),
			message.channel.send(`You have successfully bought ${items[buyItem - 1].name}.`); 
		} else if (message.guild.channels.cache.get(items[buyItem - 1])) {
			let getchannel = message.guild.channels.cache.get(items[buyItem - 1]);
			if (getchannel.permissionsFor(Member).cache.has('SEND_MESSAGES')) return message.reply('You have already bought access for that channel');
			if (selfbubbles < items[buyItem - 1].cost) return message.channel.send('You do not have enough bubbls for this item.');
			db.subtract(`bubbles_${message.author.id}`, items[buyItem - 1].cost);
			getchannel.overwritePermissions(Member, {SEND_MESSAGES: true, READ_MESSAGES: true});
			message.channel.send(`You have successfully bought ${items[buyItem - 1].name}.`);
		} else {
			if (selfbubbles < items[buyItem - 1].cost) return message.channel.send('You do not have enough bubbls for this item.');
			console.log(inventory);
			if (inventory.length >= 15) return message.channel.send('You can only have 15 items at a time.');
			db.subtract(`bubbles_${message.author.id}`, items[buyItem - 1].cost);
			UserInventory.push(`userInv_${message.author.id}`, items[buyItem - 1].name);
			message.channel.send(`You have successfully bought ${items[buyItem - 1].name}.`);
		}
	}
}

exports.help = {
	name: 'buy'
}