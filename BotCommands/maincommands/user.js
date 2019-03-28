const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
       let userinf = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setDescription("This is the user's info!")
      .setColor(0x00FF00)
      .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
      .addField("ID:", message.author.id)
      .addField('Currently', `${message.author.presence.status.toUpperCase()}`, true)
      .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
      .addField('Created At', message.author.createdAt)
      .addField('Joined At', `${message.member.joinedAt}`, true)
      .addField('Roles', message.member.roles.filterArray(r => "<@" + r.id + ">").join(' '), true)

      message.channel.send(userinf);

  }else{

      let userinfoo = new Discord.RichEmbed()
      .setAuthor(memberInfo.displayName)
      .setThumbnail(memberInfo.user.avatarURL)
      .setDescription("This is the user's info!")
      .setColor(0x00FF00)
      .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
      .addField("ID:", memberInfo.id)
      .addField("Created At:", memberInfo.user.createdAt)
      .addField('Joined At', `${memberInfo.user.joinedAt}`, true)
      .addField('Currently', `${memberInfo.user.presence.status.toUpperCase()}`, true)
      .addField('Game', `${memberInfo.user.presence.game === null ? "No Game" : memberInfo.user.presence.game.name}`, true)

      message.channel.send(userinfoo);
  }
}

exports.config = {
  aliases: [ 'userinfo', 'user-info' ]
};

module.exports.help = {
    name: "user"
}
