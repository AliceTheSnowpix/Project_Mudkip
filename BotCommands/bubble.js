const db = require('quick.db')
const Discord = require('discord.js')

const talkedRecently = new Set();

exports.run = async(bot, message, args) => {

    if (talkedRecently.has(message.author.id)) {
        return message.reply(`To prevent spam you need to wait 30 **Seconds** before using this command again`)
} else {

    talkedRecently.add(message.author.id);
    setTimeout(() => {

      talkedRecently.delete(message.author.id);
    }, 30000);
}

    let TotalBubbles;
    let bubbles = await db.fetch(`bubbles_${message.author.id}`)
    if (bubbles === null) db.set(`bubbles_${message.author.id}`, 0);
    else TotalBubbles = bubbles;
    if (TotalBubbles === undefined) TotalBubbles = 1;
    db.add(`bubbles_${message.author.id}`, 1).then(i => {
        const emb = new Discord.RichEmbed()
            .setAuthor("Pop!", message.author.displayAvatarURL)
            .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/81hVR8PKVDL.png')
            .setColor("#77c9ff")
            .setDescription(`You have popped a bubble from a bubble wrap!`)
            .addField("Total Popped", `${TotalBubbles + 1} bubbles`);
        message.channel.send({
            embed: emb
        })
    })

}

exports.config = {
    aliases: [ 'bub' ]
};

exports.help = {
    name: 'bubble'
}