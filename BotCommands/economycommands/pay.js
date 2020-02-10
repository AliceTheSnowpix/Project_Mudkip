exports.run = async(bot, message, args) => {
    const db = bot.db;
    if (!message.mentions.members.first()) return message.reply("**Please metion the user you want to give bubbles to**");
    let targetMember = message.mentions.members.first();
    if (targetMember.id === message.author.id) return message.channel.send('**You can\'t pay yourself bubbles**');
    else if (targetMember.user.bot) return message.channel.send('**You can\'t pay bots**');
    let amount = parseInt(args.join(' ').replace(targetMember, ''));
    if(isNaN(amount)) return message.reply("**Please tell me the nummber of bubbles you want to give to that person**");
    if(amount < 0) return message.reply('**you cant give negative bubbles to someone**');
    let targetBubbles = await db.fetch(`bubbles_${targetMember.id}`);
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`);
    if(targetBubbles === null) targetBubbles = 0;
    if(selfbubbles === null) selfbubbles = 0;
    if (amount > selfbubbles) return message.reply("**Sorry you don't have enough bubbles**");
    db.add(`bubbles_${targetMember.id}`, amount);
    db.subtract(`bubbles_${message.author.id}`, amount);
    message.channel.send(`**You sent ${amount}  bubbles to ${targetMember.user.tag}**`);
}

exports.help = {
    name: 'pay'
}
