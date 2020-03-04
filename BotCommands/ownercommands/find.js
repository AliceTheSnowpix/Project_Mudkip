const hastebin = require('hastebin-gen');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    if (message.author.id != '293148538886553602') return;
    let users = bot.users;

    let searchTerm = args[0];
    if (!searchTerm) return message.channel.send("Please provide a search term.");
    
    let matches = users.cache.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    let bestMatch = matches.map(u => `${u.tag} | ${u.id}`).join("\n");
    // let ids = matches.map(u => u.id).join("\n");
    if (bestMatch.length > 1000) {
        hastebin(bestMatch, "txt").then(r => {
        message.channel.send(`Output was too large. Data was exported to hastebin! ${r}`)}).catch(console.error);
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle("All the users found.")
        .setColor(0x26a98b)
        .setDescription(bestMatch);
        message.channel.send(embed);
    }
}

exports.help = {
    name: "find"
}
