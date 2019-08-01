const db = require('quick.db')
exports.run = async(bot, message, args) => {

    if (!message.mentions.members.first()) return message.reply("**Please metion the user you want to give bubbles to**")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("**Please tell me the nummber of bubbles you want to give to that person**")
        if(amount < 0) return message.reply('**you cant give negative bubbles to someone**')

        let targetBubbles = await db.fetch(`bubbles_${targetMember.id}`),
            selfbubbles = await db.fetch(`bubbles_${message.author.id}`)

            if(targetBubbles === null) targetBubbles = 0
            if(selfbubbles === null) selfbubbles = 0

            if (amount > selfbubbles) return message.reply("**Sorry you don't have enough bubbles**")

            db.add(`bubbles_${targetMember.id}`, amount)
            db.subtract(`bubbles_${message.author.id}`, amount)

            message.channel.send(`**You sent ${amount}  bubbles to ${targetMember.user.tag}**`)

}

<<<<<<< HEAD
=======
exports.config = {
    aliases: [  ]
};

>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
exports.help = {
    name: 'pay'
}
