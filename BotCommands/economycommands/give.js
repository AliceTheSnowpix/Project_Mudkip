const db = require('quick.db')
const ownerID = '293148538886553602'
exports.run = async(bot, message, args) => {

    if (message.author.id != ownerID) return message.channel.send("Bot owner only");

    if (!message.mentions.members.first()) return message.reply("**Please metion the user you want to give bubbles to**")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("**Please tell me the nummber of bubbles you want to give to that person**")

        let targetBubbles = await db.fetch(`bubbles_${targetMember.id}`)

            if(targetBubbles === null) targetBubbles = 0
 
            db.add(`bubbles_${targetMember.id}`, amount)

            message.channel.send(`**Hey <@${targetMember.id}> you got ${amount} bubbles from <@${ownerID}>**`)

}

<<<<<<< HEAD
=======
exports.config = {
    aliases: [  ]
};

>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
exports.help = {
    name: 'give'
}
