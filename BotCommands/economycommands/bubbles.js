const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
let userbub = message.mentions.members.first();

let userbubbles = await db.fetch(`bubbles_${message.author.id}`)

if(!userbub){
    let userbubembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setColor("#77c9ff")
    .addField("You have popped", `${userbubbles} bubbles`)

    message.channel.send(userbubembed)

} else {

    let memberbubbles = await db.fetch(`bubbles_${userbub.id}`)

    let membubebed = new Discord.RichEmbed()
    .setAuthor(userbub.displayName)
    .setThumbnail(userbub.user.avatarURL)
    .setColor("#77c9ff")
    .addField(`has popped`, `${memberbubbles} bubbles`)

    message.channel.send(membubebed)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
  }
}

exports.help = {
  name: 'bubbles',
  aliases: ['bubs']
<<<<<<< HEAD
=======
=======
}
}

exports.config = {
    aliases: [ 'bubs' ]
};

exports.help = {
    name: 'bubbles'
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
