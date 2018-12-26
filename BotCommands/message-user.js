const ownerID = '293148538886553602'

exports.run = async (bot,message,args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    let guild = args[0]
    let user = args[1]
    bot.guilds.get(guild).members.get(user).send(args.slice(2).join(' '))
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: "message-user"
}