const ownerID = '293148538886553602'

exports.run = async (bot,message,args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    let user = args[0]
    bot.users.get(user).send(args.slice(1).join(' '))
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: "message-user"
}
