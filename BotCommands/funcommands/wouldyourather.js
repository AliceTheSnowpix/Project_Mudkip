const question = require('../assets/wouldYouRather.json');

exports.run = async (bot, message, _args) => {
    let wouldembed = new bot.discord.MessageEmbed()
    .setColor("#f99d9d")
    .setDescription(question[Math.floor(Math.random() * question.length)]);
    let wyrChannel = message.guild.channels.find(a => a.name === 'wyr');
    let wyrChannel2 = message.guild.channels.find(a => a.name === 'would-you-rather');
    
    if (message.channel === wyrChannel || message.channel === wyrChannel2) {
        message.channel.send(wouldembed).then(async msg => { 
            await msg.react("1⃣");
            await msg.react("2⃣");
        });
    } else {
        message.channel.send(wouldembed);
    }
}

exports.help = {
    name: 'wouldyourather',
    aliases: ['wyr']
}