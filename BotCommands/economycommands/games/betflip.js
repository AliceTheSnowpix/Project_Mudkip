exports.run = async (bot, message, args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSettings');
    let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        GuildSettings.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }
    let BetHelpEmbed = new bot.discord.MessageEmbed()
    .setTitle('Command Help')
    .setColor('RANDOM')
    .addFields([{name: 'Command Info', value: 'Bet to guess will the result be heads or tails'},
    {name: 'Usage', value: `${prefix}betflip <bet ammount> <heads or tails>\n or ${prefix}bf <bet ammount> <heads or tails>`}]);
    
    let bubbles = await db.fetch(`bubbles_${message.author.id}`);
    let replies = ['heads', 'tails', 'this is ment to be a 50/50 chance of winning but that seems to eazy lol', 'no', 'please try again', 'you gonna lose all your bubbles from this lol', 'no winning for you', 'suck to suck', 'you wont win stop trying', 'oof', 'rip', 'F'];
    let bet = args[0];
    if (isNaN(bet)) return message.channel.send(BetHelpEmbed);
    else if (parseInt(bet) === 0) return message.channel.send('You can\'t bet 0');
    else if (parseInt(bet) < 0) return message.channel.send('You can\'t bet negative numbers');
    else if (args[1] !== 'heads' && args[1] !== 'tails') return message.channel.send(BetHelpEmbed);
    else if (bet > bubbles) return message.channel.send(`You don't have enough bubbles for this bet you need **${parseInt(bet) - bubbles}** more bubbles to bet this amount.`);
    let result = Math.floor((Math.random() * replies.length));

    if (args[1] !== replies[result]) {
        db.subtract(`bubbles_${message.author.id}`, parseInt(bet));
        let flipembed = new bot.discord.MessageEmbed()
        .setTitle('BetFlip')
        .setColor("RANDOM")
        .setDescription(`You lost the coin landed on **${replies[result].toProperCase()}**`);
        message.channel.send(flipembed);
    } else {
        db.add(`bubbles_${message.author.id}`, parseInt(bet) * 2);
        let flipembed = new bot.discord.MessageEmbed()
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
