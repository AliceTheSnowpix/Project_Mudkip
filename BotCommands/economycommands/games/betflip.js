exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    const db = bot.db;
    const prefixes = new db.table('PREFIXES');
    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        prefixes.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle('Command Help')
    .setColor('RANDOM')
    .addField('Command Info', 'Bet to guess will the result be heads or tails')
    .addField('Usage', `${prefix}betflip <bet ammount> <heads or tails>\n or ${prefix}bf <bet ammount> <heads or tails>`);
    
    let bubbles = await db.fetch(`bubbles_${message.author.id}`);
    let replies = ["heads", "tails"];
    let bet = args[0];
    if (isNaN(bet)) return message.channel.send(helpEmbed);
    else if (parseInt(bet) === 0) return message.channel.send('You can\'t bet 0');
    else if (parseInt(bet) < 0) return message.channel.send('You can\'t bet negative numbers');
    else if (args[1] !== 'heads' && args[1] !== 'tails') return message.channel.send(helpEmbed);
    else if (bet > bubbles) return message.channel.send(`You don't have enough bubbles for this bet you need **${parseInt(bet) - bubbles}** more bubbles to bet this amount.`);
    let result = Math.floor((Math.random() * replies.length));

    if (args[1] !== replies[result]) {
        db.subtract(`bubbles_${message.author.id}`, parseInt(bet));
        let flipembed = new Discord.MessageEmbed()
        .setTitle('BetFlip')
        .setColor("RANDOM")
        .setDescription(`You lost the coin landed on **${replies[result].toProperCase()}**`);
        message.channel.send(flipembed);
    } else {
        db.add(`bubbles_${message.author.id}`, parseInt(bet) * 2);
        let flipembed = new Discord.MessageEmbed()
        .setTitle('BetFlip')
        .setColor("RANDOM")
        .setDescription(`You won the coin landed on **${replies[result].toProperCase()}** and you gained **${parseInt(bet) * 2}** bubbles`);
        message.channel.send(flipembed);
    }
}

exports.help = {
    name: "betflip",
    aliases: ['bf']
}
