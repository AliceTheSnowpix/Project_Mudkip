const db = require('quick.db')
exports.run = async(bot, message, args) => {
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`)
    if(args.join("test"))
        {
        let cost = 1
                db.subtract(`bubbles_${message.author.id}`, cost)
                message.guild.member(message.author.id).addRole('521718720415006725')
                message.reply(`I have added the ${args} role`)
        }
    }

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'buy'
 }
