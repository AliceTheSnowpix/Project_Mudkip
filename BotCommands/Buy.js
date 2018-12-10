const db = require('quick.db')
const discord = require('discord.js')
exports.run = async(bot, message, args) => {
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`)
    let input = message.content.toLowerCase();
    let Member = message.guild.member(message.author.id)
 
    if(input === ';buy 1')
        {
            let cost = 10
            if(Member.roles.has('481129804347867165')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481129804347867165')
            message.reply(`I have gave you the <@&481129804347867165> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 2')
        {
            let cost = 25
            if(Member.roles.has('481581654167781392')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481581654167781392')
            message.reply(`I have gave you the <@&481581654167781392> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 3')
        {
            let cost = 50
            if(Member.roles.has('481609753651576842')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481609753651576842')
            message.reply(`I have gave you the <@&481609753651576842> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 4')
        {
            let cost = 100
            if(Member.roles.has('481609899206508545')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481609899206508545')
            message.reply(`I have gave you the <@&481609899206508545> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 5')
        {
            let cost = 200
            if(Member.roles.has('481610167083991071')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481610167083991071')
            message.reply(`I have gave you the <@&481610167083991071> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 6')
        {
            let cost = 300
            if(Member.roles.has('481614285416431617') return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481614285416431617')
            message.reply(`I have gave you the <@&481614285416431617> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 7')
        {
            let cost = 400
            if(Member.roles.has('481615302459785216')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481615302459785216')
            message.reply(`I have gave you the <@&481615302459785216> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 8')
        {
            let cost = 500
            if(Member.roles.has('481613362099126273') return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481613362099126273')
            message.reply(`I have gave you the <@&481613362099126273> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 9')
        {
            let cost = 1000
            if(Member.roles.has('481616059930247169')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.member(message.author.id).addRole('481616059930247169')
            message.reply(`I have gave you the <@&481616059930247169> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 10')
        {
            let cost = 5000
            if(Member.roles.has('481615070930010122')) return message.reply("you already have this item")
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
