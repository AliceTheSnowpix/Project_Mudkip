const Discord = require("discord.js");
const sm = require("string-similarity");
const send = require("quick.hook");

exports.run = async(bot, message, args) => {
    if(message.channel.type === 'dm') return message.channel.send('You can only use this command in a server')
    if (!args.join(" ")) return message.reply("**Please give me some letters so I can autofill the rest in**")

    let members = [];
    let indexes = [];
    message.guild.members.forEach(function(member) {
        members.push(member.user.username);
        indexes.push(member.id);
    })
    let match = sm.findBestMatch(args.join(' '), members);
    let username = match.bestMatch.target;
    let member = message.guild.members.get(indexes[members.indexOf(username)]);
    
    const memberembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("I Think You Want")
    .setDescription(`<@${member.user.id}>`);

    message.channel.send(memberembed);

}

exports.help = {
  name: 'autouser',
  aliases: ['au']
}
