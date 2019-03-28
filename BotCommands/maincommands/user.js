const Discord = module.require('discord.js');

exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    let role = message.member.highestRole;
    let userinf = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription("This is the user's info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Currently', `${message.author.presence.status.toUpperCase()}`, true)
    .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
    .addField('Created At', message.author.createdAt)
    .addField('Joined At', `${message.member.joinedAt}`, true)
    .addField('Roles', message.member.roles.filter(r => "<@" + r.id + ">").array().join(' '), true)

    message.channel.send(userinf);

  }else{
    let role = memberInfo.highestRole;
    let userinfoo = new Discord.RichEmbed()
    .setAuthor(memberInfo.displayName)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("This is the user's info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
    .addField("ID:", memberInfo.id)
    .addField("Created At:", memberInfo.user.createdAt)
    .addField('Joined At', `${memberInfo.joinedAt}`, true)
    .addField('Currently', `${memberInfo.user.presence.status.toUpperCase()}`, true)
    .addField('Game', `${memberInfo.user.presence.game === null ? "No Game" : memberInfo.user.presence.game.name}`, true)
    .addField('Roles', memberInfo.roles.filter(r => "<@" + r.id + ">").array().join(' '), true)

    message.channel.send(userinfoo);
  }
}

exports.config = {
  aliases: [ 'userinfo', 'user-info' ]
};

exports.help = {
    name: "user"
}
