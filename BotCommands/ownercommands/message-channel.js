<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
 const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    let guild = args[0]
    let channel = args[1]
    bot.guilds.get(guild).channels.get(channel).send(args.slice(2).join(' '))
}

exports.config = {
    aliases: [  ]
};

exports.help = {
  name: "message-channel",
  aliases: ['msg-channel']
}
<<<<<<< HEAD
=======
=======
const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    let guild = args[0]
    let channel = args[1]
    bot.guilds.get(guild).channels.get(channel).send(args.slice(2).join(' '))
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: "message-channel"
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
