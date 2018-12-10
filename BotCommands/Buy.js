const db = require('quick.db')
exports.run = async(bot, message, args) => {
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`)
 
    if(args.join("test"))
        {
        let cost = 1
        let amount = cost
            if (amount > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
                db.subtract(`bubbles_${message.author.id}`, cost)
                message.guild.member(message.author.id).addRole('521718720415006725')
                message.reply(`I have gave you the ${args} role and removed ${cost} bubbles`)
        }
    }

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'buy'
 }
