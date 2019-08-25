const ownerID = '293148538886553602'
exports.run = async (bot, message) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    let Table = require('cli-table');
    let table = new Table({
        head: [
            `ID`,
            `Name`,
            `Users`,
            `Bots`,
            `Total`
        ], colWidths: [30, 50, 10, 10, 10]
    });
    bot.guilds.map(g =>
      table.push(
        [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
      ));
    
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r =>
       message.channel.send(`Im inside these servers! http://hastebin.com/` + r.body.key));
};

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: 'serverlist'
};
