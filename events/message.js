const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs')
const blacklist = [];

module.exports = async(bot, message) => {
  const prefixes = new db.table('PREFIXES');
  if(blacklist.includes(message.author.id) || message.author.bot) return;
  let dmembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(message.author.username)
    .setAuthor(message.author.id)
    .setDescription(message.content)
  if (message.channel.type === 'dm') {
    let p = ';'
    const prefix = new RegExp(`^<@!?${bot.user.id}>`);
    const prefix1 = message.content.match(prefix) ? message.content.match(prefix)[0] : p
    if (message.content.toLowerCase().startsWith(prefix1.toLowerCase())) {
      const args = message.content.slice(prefix1.length).trim().split(/ +/g);
      let cmd = args.shift().toLowerCase();
      let command = bot.commands.get(cmd)
      let aliase = bot.aliases.get(cmd);
      if (command) command.run(bot, message, args);
      if (aliase) aliase.run(bot, message, args);
    } else {
      bot.users.get('293148538886553602').send(dmembed)
    }
  } else if (message.channel.type === 'text') {
    let p = await prefixes.fetch(`prefix_${message.guild.id}`)
    if (p === null) {
      prefixes.set(`prefix_${message.guild.id}`, ';');
      p = ';';
    }
  
    const prefix = new RegExp(`^<@!?${bot.user.id}>`);
    const prefix1 = message.content.match(prefix) ? message.content.match(prefix)[0] : p
    if (!message.content.toLowerCase().startsWith(prefix1.toLowerCase())) return;
    const args = message.content.slice(prefix1.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command = bot.commands.get(cmd);
    let aliase = bot.aliases.get(cmd);
    if (command) command.run(bot, message, args);
    if (aliase) aliase.run(bot, message, args);
  }
}