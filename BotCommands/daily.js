const botconfig = require('./botconfig/botconfig.json')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async(bot, message, args) => {

    let serverID = (botconfig.serverID)
    if (message.guild.id != serverID) return message.channel.send("Support Server Only Sorry Here Is The Link To Join https://discord.gg/fGQTVek");

let cooldown = 8.64e+7
let amount = 105
let amount2 = 95
let amount3 = 85
let amount4 = 75
let amount5 = 65
let amount6 = 55
let amount7 = 45
let amount8 = 35
let amount9 = 25
let amount10 = 15
let amount11 = 10

let lastdaily = await db.fetch(`lastdaily_${message.author.id}`)
if(lastdaily !== null && cooldown - (Date.now() - lastdaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastdaily));

    message.channel.send(`you already got your daily bubles you need to wait **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)

} else { 
if(message.member.roles.find(a => a.name === "the bubble popper overlord")){
message.channel.send(`you got your ${amount} daily bubbles`)

    db.set(`lastdaily_${message.author.id}`, Date.now());
    db.add(`bubbles_${message.author.id}`, 105)

} else { 
    if(message.member.roles.find(b => b.name === "the bubble popping king")){
    message.channel.send(`you got your ${amount2} daily bubbles`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`bubbles_${message.author.id}`, 95)
     
} else { 
    if(message.member.roles.find(c => c.name === "insane bubble popper")){
    message.channel.send(`you got your ${amount3} daily bubbles`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`bubbles_${message.author.id}`, 85)
    
    } else { 
        if(message.member.roles.find(d => d.name === "awesome bubble popper")){
        message.channel.send(`you got your ${amount4} daily bubbles`)
        
            db.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 75)
            
        } else { 
            if(message.member.roles.find(e => e.name === "super bubble popper")){
            message.channel.send(`you got your ${amount5} daily bubbles`)
            
                db.set(`lastdaily_${message.author.id}`, Date.now());
                db.add(`bubbles_${message.author.id}`, 65)
                
            } else { 
                if(message.member.roles.find(f => f.name === "master bubble popper")){
                message.channel.send(`you got your ${amount6} daily bubbles`)
                
                    db.set(`lastdaily_${message.author.id}`, Date.now());
                    db.add(`bubbles_${message.author.id}`, 55)
                    
                } else { 
                    if(message.member.roles.find(g => g.name === "expert bubble popper")){
                    message.channel.send(`you got your ${amount7} daily bubbles`)
                    
                        db.set(`lastdaily_${message.author.id}`, Date.now());
                        db.add(`bubbles_${message.author.id}`, 45)
                        
                    } else { 
                        if(message.member.roles.find(h => h.name === "average bubble popper")){
                        message.channel.send(`you got your ${amount8} daily bubbles`)
                        
                            db.set(`lastdaily_${message.author.id}`, Date.now());
                            db.add(`bubbles_${message.author.id}`, 35)
                            
                        } else { 
                            if(message.member.roles.find(i => i.name === "moderate bubble popper")){
                            message.channel.send(`you got your ${amount9} daily bubbles`)
                            
                                db.set(`lastdaily_${message.author.id}`, Date.now());
                                db.add(`bubbles_${message.author.id}`, 25)
                                
                            } else { 
                                if(message.member.roles.find(j => j.name === "new bubble popper")){
                                message.channel.send(`you got your ${amount10} daily bubbles`)
                                
                                    db.set(`lastdaily_${message.author.id}`, Date.now());
                                    db.add(`bubbles_${message.author.id}`, 15)
                                    
                                } else { 
                                    if(message.member.roles.find(k => k.name === "members")){
                                    message.channel.send(`you got your ${amount11} daily bubbles`)
                                    
                                        db.set(`lastdaily_${message.author.id}`, Date.now());
                                        db.add(`bubbles_${message.author.id}`, 10)
                                        
                                        
                                    }}}}}}}}}}}}
    
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'daily'
}