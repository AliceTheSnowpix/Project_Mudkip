exports.run = async (bot,message,args) => {
    if (message.author.id !== '293148538886553602') return;
    let user = args[0];
    bot.users.cache.get(user).send(args.slice(1).join(' ')).catch(err => {
        message.author.send(err);
    });
    message.author.send('Message has successfully been sent.');
}

exports.help = {
    name: "message-user",
    aliases: ['msg-user']
}
