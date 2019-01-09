exports.run = (bit, message, args) => {
  const reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  const user = args[0];
  const modlog = bot.channels.find('a => a.name === 'modlogs');
  if (!modlog) return message.reply('I cannot find a modlogs channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You need to send the id of the user you want to unban').catch(console.error);
  message.guild.unban(user);
};

exports.config = {
  aliases: []
};

exports.help = {
  name: 'unban'
};
