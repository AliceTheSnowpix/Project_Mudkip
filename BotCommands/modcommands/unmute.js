const Discord = require('discord.js');
const db = require('quick.db');
const logchannel = new db.table('LOGCHANNEL');
const modrole = new db.table('MODROLE');
const prefixes = new db.table('PREFIXES');

exports.run = async(bot, message, args) => {
  let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    prefixes.set(`prefix_${message.guild.id}`, ';');
    prefix = ';';
  }
  let mr = await modrole.fetch(`modrole_${message.guild.id}`);
  let lc = await logchannel.fetch(`logchannel_${message.guild.id}`);
  if (!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.has(mr)) return message.reply("Sorry you cant use this command because you do not have the manage messages permission");
  
  let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let errorEmbed = new Discord.RichEmbed()
  .setTitle('Incorect Command Usage')
  .setColor('PURPLE')
  .addField('Command usage', ';unmute <member name / mention> <reason optional>')
  
  if (!Mute) return message.reply(errorEmbed);
  let arg = message.content.toLowerCase(); 
  let mreason = args.join(" ").slice(22);
  if(Mute.hasPermission("MANAGE_MESSAGES") || Mute.roles.has(mr)) return message.reply("Can't unmute them!"); 
  message.guild.channels.forEach(channel => {
     channel.overwritePermissions(message.guild.members.get(Mute.id),{
       SEND_MESSAGES: null
     });
   });

  let mutechan = message.guild.channels.find(b => b.name === "modlogs");
  let channel = message.guild.channels.get(lc);
  if (!mutechan && !channel) return message.channel.send(`Could not find log channel please set the log channel by using the command ${prefix}set logchannel <channel name> or create a channel called modlogs`);
  if (!mreason) {
    let muteembed = new Discord.RichEmbed()
    .setAuthor('Unmuted by' + message.author.username)
    .addField('Unmuted in', message.channel.name)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been unmuted`)
    .addField("There was no reason given", `so I don't know why <@${Mute.id}> was unmuted`)
    message.delete().catch(O_o=>{});
    if (mutechan) return mutechan.send(muteembed);
    else if (channel) return channel.send(muteembed);

  } else {
    let muteembed = new Discord.RichEmbed()
    .setAuthor('Muted by' + message.author.username)
    .addField('Muted in', message.channel.name)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been unmuted`)
    .addField("Reason for unmute", mreason)

    message.delete().catch(O_o=>{});
    if (mutechan) return mutechan.send(muteembed);
    else if (channel) return channel.send(muteembed);
  }
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'unmute'
};
