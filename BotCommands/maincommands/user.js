<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  if(message.channel.type === 'dm') {
    let userEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription('Here is your user info!')
    .setColor('RANDOM')
    .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Currently:', message.author.presence.status.charAt(0).toUpperCase() + message.author.presence.status.slice(1), true)
    .addField('Current Activity:', message.author.presence.game === null ? "Nothing at the moment." : message.author.presence.game.name, true)
    .addField('Joined Discord At:', message.author.createdAt, true)
    return message.channel.send(userEmbed);
  }
<<<<<<< HEAD
=======
=======
const Discord = module.require('discord.js');

exports.run = async (bot, message, args) => {
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    let role = message.member.highestRole;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    let userinfo = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Here is your user info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Nickname:', message.guild.members.get(message.author.id).displayName === message.author.username ? "No nickname currently." : message.guild.members.get(message.author.id).displayName, true)
    .addField('Currently:', message.author.presence.status.charAt(0).toUpperCase() + message.author.presence.status.slice(1))
    .addField('Current Activity:', message.author.presence.game === null ? "Nothing at the moment." : message.author.presence.game.name, true)
    .addField('Joined Discord At:', message.author.createdAt, true)
    .addField('Joined Server At:', message.member.joinedAt, true)
    .addField('Roles:', message.member.roles.filter(r => "<@" + r.id + ">").array().join(' | '), true)

    message.channel.send(userinfo);

  }else{
    let role = memberInfo.highestRole;
    let memberinfo = new Discord.RichEmbed()
<<<<<<< HEAD
=======
=======
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
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    .setAuthor(memberInfo.displayName)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("This is the user's info!")
    .setColor(role.hexColor)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
    .addField("ID:", memberInfo.id)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    .addField('Nickname:', memberInfo.nickname === undefined ? "No nickname currently." : memberInfo.nickname, true)
    .addField('Currently:', memberInfo.user.presence.status.charAt(0).toUpperCase() + memberInfo.presence.status.slice(1), true)
    .addField('Current Activity:', memberInfo.user.presence.game === null ? "Nothing at the moment." : memberInfo.user.presence.game.name, true)
    .addField("Joined Discord At:", memberInfo.user.createdAt, true)
    .addField('Joined Server At:', memberInfo.joinedAt, true)
    .addField('Roles:', memberInfo.roles.filter(r => "<@" + r.id + ">").array().join(' | '), true)

    message.channel.send(memberinfo);
<<<<<<< HEAD
=======
=======
    .addField("Created At:", memberInfo.user.createdAt)
    .addField('Joined At', `${memberInfo.joinedAt}`, true)
    .addField('Currently', `${memberInfo.user.presence.status.toUpperCase()}`, true)
    .addField('Game', `${memberInfo.user.presence.game === null ? "No Game" : memberInfo.user.presence.game.name}`, true)
    .addField('Roles', memberInfo.roles.filter(r => "<@" + r.id + ">").array().join(' '), true)

    message.channel.send(userinfoo);
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
  }
}

exports.config = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
  aliases: ['userinfo', 'user-info', 'ui']
};

exports.help = {
  name: "user",
  aliases: ['userinfo', 'user-info', 'ui']
<<<<<<< HEAD
=======
=======
  aliases: [ 'userinfo', 'user-info' ]
};

exports.help = {
    name: "user"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
