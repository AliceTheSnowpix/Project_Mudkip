const db = require('quick.db');
// Items Tables
const Item1 = new db.table('ITEM1');
const Item2 = new db.table('ITEM2');
const Item3 = new db.table('ITEM3');
const Item4 = new db.table('ITEM4');
const Item5 = new db.table('ITEM5');
const Item6 = new db.table('ITEM6');
const Item7 = new db.table('ITEM7');
const Item8 = new db.table('ITEM8');
const Item9 = new db.table('ITEM9');
const Item10 = new db.table('ITEM10');

exports.run = async(bot, message, args) => {
  const discord =  bot.discord;
  let i1 = await Item1.fetch(`item1_${message.guild.id}`);
  let i2 = await Item2.fetch(`item2_${message.guild.id}`);
  let i3 = await Item3.fetch(`item3_${message.guild.id}`);
  let i4 = await Item4.fetch(`item4_${message.guild.id}`);
  let i5 = await Item5.fetch(`item5_${message.guild.id}`);
  let i6 = await Item6.fetch(`item6_${message.guild.id}`);
  let i7 = await Item7.fetch(`item7_${message.guild.id}`);
  let i8 = await Item8.fetch(`item8_${message.guild.id}`);
  let i9 = await Item9.fetch(`item9_${message.guild.id}`);
  let i10 = await Item10.fetch(`item10_${message.guild.id}`);
  
  if (i1 === 'not set') return message.channel.send('You currently have nothing in your inventory.');
  if (i1 === null && i2 === null && i3 === null && i4 === null && i5 === null && i6 === null && i7 === null && i8 === null && i9 === null && i10 === null) return message.channel.send('You currently have nothing in your inventory.');
  let inventoryEmbed = new discord.RichEmbed()
  .setTitle(`**${message.author.username}'s** Inventory`)
  .setColor('RANDOM')
  if (i1) {
    let inventory = await db.fetch(`inventory1_${message.guild.id}_${message.author.id}_${i1}`);
    let role = message.guild.roles.get(i1);
    let channel = message.guild.channels.get(i1)
    if (role && channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i1, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i2 !== 'not set') {
    let inventory = await db.fetch(`inventory2_${message.guild.id}_${message.author.id}_${i2}`);
    let role = message.guild.roles.get(i2);
    let channel = message.guild.channels.get(i2)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i2, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i3 !== 'not set') {
    let inventory = await db.fetch(`inventory3_${message.guild.id}_${message.author.id}_${i3}`);
    let role = message.guild.roles.get(i3);
    let channel = message.guild.channels.get(i3)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i3, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i4 !== 'not set') {
    let inventory = await db.fetch(`inventory4_${message.guild.id}_${message.author.id}_${i4}`);
    let role = message.guild.roles.get(i4);
    let channel = message.guild.channels.get(i4)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i4, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i5 !== 'not set') {
    let inventory = await db.fetch(`inventory5_${message.guild.id}_${message.author.id}_${i5}`);
    let role = message.guild.roles.get(i5);
    let channel = message.guild.channels.get(i5)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i5, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i6 !== 'not set') {
    let inventory = await db.fetch(`inventory6_${message.guild.id}_${message.author.id}_${i6}`);
    let role = message.guild.roles.get(i6);
    let channel = message.guild.channels.get(i6)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i6, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i7 !== 'not set') {
    let inventory = await db.fetch(`inventory7_${message.guild.id}_${message.author.id}_${i1}`);
    let role = message.guild.roles.get(i7);
    let channel = message.guild.channels.get(i7)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i7, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i8 !== 'not set') {
    let inventory = await db.fetch(`inventory8_${message.guild.id}_${message.author.id}_${i8}`);
    let role = message.guild.roles.get(i8);
    let channel = message.guild.channels.get(i8)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i8, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i9 !== 'not set') {
    let inventory = await db.fetch(`inventory9_${message.guild.id}_${message.author.id}_${i9}`);
    let role = message.guild.roles.get(i9);
    let channel = message.guild.channels.get(i9)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i9, `you currently have ${inventory} of this item in your inventory.`);
  }
  if (i10 !== 'not set') {
    let inventory = await db.fetch(`inventory10_${message.guild.id}_${message.author.id}_${i10}`);
    let role = message.guild.roles.get(i10);
    let channel = message.guild.channels.get(i10)
    if (role || channel || inventory === null) inventoryEmbed;
    else inventoryEmbed.addField(i10, `you currently have ${inventory} of this item in your inventory.`);
  }
  message.channel.send(inventoryEmbed);
}

exports.help = {
  name: 'inventory',
  aliases: ['inv']
}