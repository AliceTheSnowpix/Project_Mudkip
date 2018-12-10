const db = require('quick.db')
exports.run = async(bot, message, args) => {
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`)
 
    if(args.join("1"))
        {
            let cost = 10
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481129804347867165')
            message.reply(`I have gave you the <@&481129804347867165> role and removed ${cost} bubbles`)
        }
    else if(args.join('2'))
        {
            let cost = 25
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481581654167781392')
            message.reply(`I have gave you the <@&481581654167781392> role and removed ${cost} bubbles`)
        }
    else if(args.join('3'))
        {
            let cost = 50
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481609753651576842')
            message.reply(`I have gave you the <@&481609753651576842> role and removed ${cost} bubbles`)
        }
    else if(args.join('4'))
        {
            let cost = 100
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481609899206508545')
            message.reply(`I have gave you the <@&481609899206508545> role and removed ${cost} bubbles`)
        }
    else if(args.join('5'))
        {
            let cost = 200
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481610167083991071')
            message.reply(`I have gave you the <@&481610167083991071> role and removed ${cost} bubbles`)
        }
    else if(args.join('6'))
        {
            let cost = 300
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481614285416431617')
            message.reply(`I have gave you the <@&481614285416431617> role and removed ${cost} bubbles`)
        }
    else if(args.join('7'))
        {
            let cost = 400
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481615302459785216')
            message.reply(`I have gave you the <@&481615302459785216> role and removed ${cost} bubbles`)
        }
    else if(args.join('8'))
        {
            let cost = 500
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481613362099126273')
            message.reply(`I have gave you the <@&481613362099126273> role and removed ${cost} bubbles`)
        }
    else if(args.join('9'))
        {
            let cost = 1000
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481616059930247169')
            message.reply(`I have gave you the <@&481616059930247169> role and removed ${cost} bubbles`)
        }
    else if(args.join('10'))
        {
            let cost = 5000
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481615070930010122')
            message.reply(`I have gave you the <@&481615070930010122> role and removed ${cost} bubbles`)
        }
    }

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'buy'
 }
