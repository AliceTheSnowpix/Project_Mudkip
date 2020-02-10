const ms = require('parse-ms');

exports.run = async(bot, message, args) => {
    const db = bot.db;
    const discord = bot.discord;
    const workTime = new db.table('WorkTime');

    let timer = 1800000;
    let wt = await workTime.fetch(`worktime_${message.author.id}`);

    if(wt !== null && timer - (Date.now() - wt) > 0) {
        let timeObj = ms(timer - (Date.now() - wt));
        message.channel.send(`You need to wait **${timeObj.minutes} minutes, ${timeObj.seconds} seconds** before you can work again `);
    } else {
        let workAmount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        workTime.set(`worktime_${message.author.id}`, Date.now());
        db.add(`bubbles_${message.author.id}`, workAmount);

        let workEmbed = new discord.RichEmbed()
        .setTitle('Work Results')
        .setColor('RANDOM')
        .setDescription(`While you were working you got ${workAmount} bubbles.`)
        .setFooter(`You can work again in 30 minutes`)
        message.channel.send(workEmbed);
    }
}

exports.help = {
    name: 'work'
}