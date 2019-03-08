const discord = require("discord.js");

exports.run = (bot, message, args) => {
  const reason = args.slice(1).join(' ');
  const user = args[0];
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  const modlog = bot.channels.find(a => a.name === 'modlogs');
  if (!modlog) return message.reply('I cannot find a modlogs channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You need to send the id of the user you want to unban').catch(console.error);
  let unbanEmbed = new discord.RichEmbed()
  .setColor('00AAFF')
  .setTitle("Unban")
  .addField("Unbanned User", `<@${user}> with ID ${user}`)
  .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Unbanned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  
  modlog.send(unbanEmbed);
  message.guild.unban(user);
};

exports.config = {
  aliases: []
};

exports.help = {
  name: 'unban'
};
