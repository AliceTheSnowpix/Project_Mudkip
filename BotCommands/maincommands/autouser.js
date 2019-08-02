const Discord = require("discord.js");
const sm = require("string-similarity");
const send = require("quick.hook");

exports.run = async(bot, message, args) => {
<<<<<<< HEAD
    if(message.channel.type === 'dm') return message.channel.send('You can only use this command in a server')
=======
<<<<<<< HEAD
    if(message.channel.type === 'dm') return message.channel.send('You can only use this command in a server')
=======
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
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

exports.config = {
    aliases: [ 'au' ]
};

exports.help = {
<<<<<<< HEAD
  name: 'autouser',
  aliases: ['au']
=======
<<<<<<< HEAD
  name: 'autouser',
  aliases: ['au']
=======
    name: 'autouser'
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
