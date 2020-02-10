const ms = require('parse-ms');

exports.run = async(bot, message, args) => {
    const db = bot.db;
    const lastdaily = new db.table('LASTDAILY');
    const prefixes = new db.table('PREFIXES');
    let cooldown = 8.64e+7;
    let amount = 105;
    let amount2 = 95;
    let amount3 = 85;
    let amount4 = 75;
    let amount5 = 65;
    let amount6 = 55;
    let amount7 = 45;
    let amount8 = 35;
    let amount9 = 25;
    let amount10 = 15;
    let amount11 = 10;

    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
      prefixes.set(`prefix_${message.guild.id}`, ';');
      prefix = ';';
    }

    let ld = await lastdaily.fetch(`lastdaily_${message.author.id}`);
    if(ld !== null && cooldown - (Date.now() - ld) > 0) {
        let timeObj = ms(cooldown - (Date.now() - ld));
        message.channel.send(`You already got your daily bubbles you need to wait **${timeObj.hours} hours ${timeObj.minutes} minutes ${timeObj.seconds} seconds** `);

    } else { 
        if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(a => a.name === "the bubble popper overlord")) {
            message.channel.send(`You got your ${amount} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 105);
            
        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(b => b.name === "the bubble popping king")) {
            message.channel.send(`you got your ${amount2} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 95);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(c => c.name === "insane bubble popper")) {
            message.channel.send(`you got your ${amount3} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 85);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(d => d.name === "awesome bubble popper")) {
            message.channel.send(`you got your ${amount4} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 75);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(e => e.name === "super bubble popper")) {
            message.channel.send(`you got your ${amount5} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 65);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(f => f.name === "master bubble popper")) {
            message.channel.send(`you got your ${amount6} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 55);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(g => g.name === "expert bubble popper")) {
            message.channel.send(`you got your ${amount7} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 45);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(h => h.name === "average bubble popper")) {
            message.channel.send(`you got your ${amount8} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 35);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(i => i.name === "moderate bubble popper")) {
            message.channel.send(`you got your ${amount9} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 25);

        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id).roles.find(j => j.name === "new bubble popper")) {
            message.channel.send(`you got your ${amount10} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 15);
            
        } else if (bot.guilds.get('456629010890227714').members.get(message.author.id)) {
            message.channel.send(`you got your ${amount11} daily bubbles`);
            lastdaily.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`bubbles_${message.author.id}`, 10);
            
        } else {
            return message.channel.send(`You are not in my support server in order for you to cliam your daily gift you need to be in my support server you can get the link using the ${prefix}join command`);
        }
    }
}

exports.help = {
    name: 'daily'
}