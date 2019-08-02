const db = require('quick.db');
const discord = require('discord.js');
exports.run = async(bot, message, args) => {
    let selfbubbles = await db.fetch(`bubbles_${message.author.id}`);
    let input = message.content.toLowerCase();
    let Member = message.guild.member(message.author.id);
    
     let serverID = (456629010890227714);
     if (message.guild.id != serverID) return message.channel.send("Support Server Only, Here Is The Link To Join https://discord.gg/fGQTVek");
 
    if(input === ';buy 1' || input === `<@${bot.user.id}> 1`)
        {
            let cost = 10;
            if(Member.roles.has('481129804347867165')) return message.reply("you already have this item");
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
            db.subtract(`bubbles_${message.author.id}`, cost);
            Member.addRole('481129804347867165');
            message.reply(`I have gave you the <@&481129804347867165> role and removed ${cost} bubbles`);
        }
    else if(input === ';buy 2' || input === `<@${bot.user.id}> 2`)
        {
            let cost = 25;
            if(Member.roles.has('481581654167781392')) return message.reply("you already have this item");
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
            db.subtract(`bubbles_${message.author.id}`, cost);
            Member.addRole('481581654167781392');
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }
            message.reply(`I have gave you the <@&481581654167781392> role and removed ${cost} bubbles`);
        }
    else if(input === ';buy 3' || input ===  `<@${bot.user.id}> 3`)
        {
            let cost = 50
            if(Member.roles.has('481609753651576842')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481609753651576842')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }
            message.reply(`I have gave you the <@&481609753651576842> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 4' || input === `<@${bot.user.id}> 4`)
        {
            let cost = 100
            if(Member.roles.has('481609899206508545')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481609899206508545');
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }
            message.reply(`I have gave you the <@&481609899206508545> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 5' || input === `<@${bot.user.id}> 5`)
        {
            let cost = 200
            if(Member.roles.has('481610167083991071')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481610167083991071')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }
            message.reply(`I have gave you the <@&481610167083991071> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 6' || input === `<@${bot.user.id}> 6`)
        {
            let cost = 300
            if(Member.roles.has('481614285416431617')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481614285416431617')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }else if(Member.roles.has('481610167083991071')) {
              Member.removeRole('481610167083991071')
            }
            message.reply(`I have gave you the <@&481614285416431617> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 7' || input === `<@${bot.user.id}> 7`)
        {
            let cost = 400
            if(Member.roles.has('481615302459785216')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481615302459785216')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }else if(Member.roles.has('481610167083991071')) {
              Member.removeRole('481610167083991071')
            }else if(Member.roles.has('481614285416431617')) {
              Member.removeRole('481614285416431617')
            }
            message.reply(`I have gave you the <@&481615302459785216> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 8' || input === `<@${bot.user.id}> 8`)
        {
            let cost = 500
            if(Member.roles.has('481613362099126273')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481613362099126273')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }else if(Member.roles.has('481610167083991071')) {
              Member.removeRole('481610167083991071')
            }else if(Member.roles.has('481614285416431617')) {
              Member.removeRole('481614285416431617')
            }else if(Member.roles.has('481615302459785216')) {
              Member.removeRole('481615302459785216')
            }
            message.reply(`I have gave you the <@&481613362099126273> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 9' || input === `<@${bot.user.id}> 9`)
        {
            let cost = 1000
            if(Member.roles.has('481616059930247169')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481616059930247169')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }else if(Member.roles.has('481610167083991071')) {
              Member.removeRole('481610167083991071')
            }else if(Member.roles.has('481614285416431617')) {
              Member.removeRole('481614285416431617')
            }else if(Member.roles.has('481615302459785216')) {
              Member.removeRole('481615302459785216')
            }else if(Member.roles.has('481613362099126273')) {
              Member.removeRole('481613362099126273')
            }
            message.reply(`I have gave you the <@&481616059930247169> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 10' || input === `<@${bot.user.id}> 10`)
        {
            let cost = 5000
            if(Member.roles.has('481615070930010122')) return message.reply("you already have this item")
            if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**")
            db.subtract(`bubbles_${message.author.id}`, cost)
            Member.addRole('481615070930010122')
            if(Member.roles.has('481129804347867165')) {
              Member.removeRole('481129804347867165')
            }else if(Member.roles.has('481581654167781392')) {
              Member.removeRole('481581654167781392')
            }else if(Member.roles.has('481609753651576842')) {
              Member.removeRole('481609753651576842')
            }else if(Member.roles.has('481609899206508545')) {
              Member.removeRole('481609899206508545')
            }else if(Member.roles.has('481610167083991071')) {
              Member.removeRole('481610167083991071')
            }else if(Member.roles.has('481614285416431617')) {
              Member.removeRole('481614285416431617')
            }else if(Member.roles.has('481615302459785216')) {
              Member.removeRole('481615302459785216')
            }else if(Member.roles.has('481613362099126273')) {
              Member.removeRole('481613362099126273')
            }else if(Member.roles.has('481616059930247169')) {
              Member.removeRole('481616059930247169')
            }
            message.reply(`I have gave you the <@&481615070930010122> role and removed ${cost} bubbles`)
        }
    else if(input === ';buy 11' || input === `<@${bot.user.id}> 11`)
        {
            let cost = 10000
            if(Member.channel.permissions.has('SEND_MESSAGES')) return message.reply('**you already have that item')
            if(cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy that')
            db.subtract(`bubbles_${message.author.id}`, cost)
            message.guild.channel.get('483550966965075968').overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true})
            message.reply(`I have gave you access to the channel <#483550966965075968> and removed ${cost} bubbles`)
        }
    else if(input === ';buy 12' || input === `<@${bot.user.id}> 12`) 
        {
            let cost = 5
            if(Member.channel.permissions.has('SEND_MESSAGES')) return message.reply('you already have that item');
            if(cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy this');
            db.subtract(`bubbels_${message.author.id}`, cost);
            message.guild.channel.get('483551789254311937').overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
            message.reply(`I have gave you access to the channel <#483551789254311937> and removed ${cost} bubbles`);
        }
    }

<<<<<<< HEAD
=======
exports.config = {
    aliases: []   
}

>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.help = {
    name: 'buy'
 }
