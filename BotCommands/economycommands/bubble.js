const ms = require('parse-ms');

exports.run = async(bot, message, _args) => {
    const db = bot.db;
    const Bubbles = new db.table('Bubbles');
    let cooldown = 30000;
    let lb = await Bubbles.fetch(`lastbubble_${message.author.id}`);
    if (lb !== null && cooldown - (Date.now() - lb) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lb));
        return message.reply(`You need to wait **${timeObj.seconds} seconds** before you can pop another bubble`);
    } else {
        Bubbles.set(`lastbubble_${message.author.id}`, Date.now());
    }

    let totalBubbles;
    let bubbles = await db.fetch(`bubbles_${message.author.id}`);
    if (bubbles === null) db.set(`bubbles_${message.author.id}`, 0);
    else totalBubbles = bubbles;
    if (totalBubbles === undefined) totalBubbles = 0;
    db.add(`bubbles_${message.author.id}`, 1);

    const embed = new bot.discord.MessageEmbed()
    .setAuthor("Pop!", message.author.displayAvatarURL())
    .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/81hVR8PKVDL.png')
    .setColor("#77c9ff")
    .setDescription(`You have popped a bubble from a bubble wrap!`)
    .addField("Total Popped", `${totalBubbles + 1} bubbles`);
    message.channel.send(embed);
}

exports.help = {
    name: 'bubble',
    aliases: ['bub']
}
