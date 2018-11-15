const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = async(bot, message, args) => {
    let msg = await message.channel.send(':loading: Generating avatar...');
    let mentionedUser = message.mentions.users.first() || message.author;
    let avatar = 'https://discord.services/api/magik?url=' + mentionedUser.displayAvatarURL;
    let avatarEmbed = new Discord.RichEmbed()
        .setImage(avatar)
        .setColor('#a0e5ff')
        .setTitle('Magik')
        .setDescription('[Magik Link](' + avatar + ')');

    message.channel.send(avatarEmbed);
    msg.delete();
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'magik'
}