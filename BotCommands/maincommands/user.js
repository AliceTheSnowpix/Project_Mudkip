const moment = require('moment');

exports.run = async (bot, message, _args) => {
    if (message.channel.type === 'dm') {
        let userEmbed = new bot.discord.MessageEmbed()
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
        let role = message.member.roles.highest;
        let userinfo = new bot.discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("Here is your user info!")
        .setColor(role.hexColor)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`, true)
        .addField("ID:", message.author.id, true)
        .addField('Nickname:', message.guild.members.cache.get(message.author.id).displayName === message.author.username ? "No nickname currently." : message.guild.members.cache.get(message.author.id).displayName)
        .addField('Currently:', message.author.presence.status.toProperCase(), true)
        .addField('Current Activity:', message.author.presence.activities === null ? "Nothing at the moment." : message.author.presence.activities, true)
        .addField('Joined Discord On:', moment(message.author.createdAt).format('MMMM Do YYYY'), true)
        .addField('Joined Server On:', moment(message.member.joinedAt).format('MMMM Do YYYY'), true)
        .addField('Roles:', message.member.roles.cache.filter((r => "<@" + r.id + ">", n => n.name !== '@everyone')).array().join(' | '), true);
        message.channel.send(userinfo);
    } else {
        let role = memberInfo.roles.highest;
        let memberinfo = new bot.discord.MessageEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(role.hexColor)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`, true)
        .addField("ID:", memberInfo.id, true)
        .addField('Nickname:', memberInfo.nickname === null ? "No nickname currently." : memberInfo.nickname)
        .addField('Currently:', memberInfo.user.presence.status.charAt(0).toUpperCase() + memberInfo.presence.status.slice(1), true)
        .addField('Current Activity:', memberInfo.user.presence.game === null ? "Nothing at the moment." : memberInfo.user.presence.game.name, true)
        .addField("Joined Discord On:", moment(memberInfo.user.createdAt).format('MMMM Do YYYY'), true)
        .addField('Joined Server On:', moment(memberInfo.joinedAt).format('MMMM Do YYYY'), true)
        .addField('Roles:', memberInfo.roles.cache.filter((r => "<@" + r.id + ">", n => n.name !== '@everyone')).array().join(' | '), true);
        message.channel.send(memberinfo);
    }
}

exports.help = {
    name: "user",
    aliases: ['userinfo', 'user-info']
}
