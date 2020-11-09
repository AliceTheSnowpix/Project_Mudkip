const {findBestMatch} = require("string-similarity");

exports.run = async(bot, message, args) => {
    if (message.channel.type === 'dm') return message.channel.send('You can only use this command in a server');
    if (!args.join(" ")) return message.reply("**Please give me some letters so I can autofill the rest in**");
    let members = [];
    let indexes = [];

    message.guild.members.cache.forEach(function(member) {
        members.push(member.user.username);
        indexes.push(member.id);
    });
    
    let match = findBestMatch(args.join(' '), members);
    let username = match.bestMatch.target;
    let member = message.guild.members.cache.get(indexes[members.indexOf(username)]);
    
    const memberembed = new bot.discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("I Think You Want")
    .setDescription(`<@${member.user.id}>`);
    message.channel.send(memberembed);
}

exports.help = {
    name: 'autouser',
    aliases: ['au']
}
