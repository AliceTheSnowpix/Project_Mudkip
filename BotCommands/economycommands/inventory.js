exports.run = async(bot, message, _args) => {
	const db = bot.db;
	const UserInventory = new db.table('UserInventory');
	let inventory = await UserInventory.fetch(`userInv_${message.author.id}`);
	let inventoryEmbed = new bot.discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(`${bot.users.cache.get(message.author.id).tag}'s Inventory`)
	.setTimestamp();
	if (inventory === null) {
		UserInventory.set(`userInv_${message.author.id}`, []);
		return message.channel.send('You don\'t currently have any items in your inventory.');
	}
	if (inventory[0] === undefined) return message.channel.send('You don\'t currently have any items in your inventory.');
	let i = 0;
	inventory.forEach(item => {
		inventoryEmbed.addField(i + 1, item);
		i++; 
	})

	message.channel.send(inventoryEmbed);
}

exports.help = {
	name: 'inventory',
	aliases: ['inv']
}