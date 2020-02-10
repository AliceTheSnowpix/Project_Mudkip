const moment = require('moment');

exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
  if (message.channel.type === 'dm') {
    let userEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription('Here is your user info!')
    .setColor('RANDOM')
    .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Currently:', message.author.presence.status.toProperCase())
    .addField('Current Activity:', message.author.presence.game === null ? "Nothing at the moment." : message.author.presence.game.name)
    .addField('Joined Discord On:', moment(message.author.createdAt).format('MMMM Do YYYY'))
    return message.channel.send(userEmbed);
  }

  let memberInfo = message.mentions.members.first();
  if (!memberInfo) {
    let role = message.member.highestRole;
    let userinfo = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Here is your user info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Nickname:', message.guild.members.get(message.author.id).displayName === message.author.username ? "No nickname currently." : message.guild.members.get(message.author.id).displayName)
    .addField('Currently:', message.author.presence.status.toProperCase())
    .addField('Current Activity:', message.author.presence.game === null ? "Nothing at the moment." : message.author.presence.game.name)
    .addField('Joined Discord On:', moment(message.author.createdAt).format('MMMM Do YYYY'))
    .addField('Joined Server On:', moment(message.member.joinedAt).format('MMMM Do YYYY'))
    .addField('Roles:', message.member.roles.filter(r => "<@" + r.id + ">").array().join(' | '))
    message.channel.send(userinfo);

  } else {
    let role = memberInfo.highestRole;
    let memberinfo = new Discord.RichEmbed()
    .setAuthor(memberInfo.displayName)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("This is the user's info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
    .addField("ID:", memberInfo.id)
    .addField('Nickname:', memberInfo.nickname === undefined ? "No nickname currently." : memberInfo.nickname)
    .addField('Currently:', memberInfo.user.presence.status.charAt(0).toUpperCase() + memberInfo.presence.status.slice(1))
    .addField('Current Activity:', memberInfo.user.presence.game === null ? "Nothing at the moment." : memberInfo.user.presence.game.name)
    .addField("Joined Discord On:", moment(memberInfo.user.createdAt).format('MMMM Do YYYY'))
    .addField('Joined Server On:', moment(memberInfo.joinedAt).format('MMMM Do YYYY'))
    .addField('Roles:', memberInfo.roles.filter(r => "<@" + r.id + ">").array().join(' | '))
    message.channel.send(memberinfo);
  }
}

exports.help = {
  name: "user",
  aliases: ['userinfo', 'user-info', 'ui']
}
