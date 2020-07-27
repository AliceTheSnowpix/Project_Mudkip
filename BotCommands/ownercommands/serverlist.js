exports.run = async (bot, message, _args) => {
    if (message.author.id != '293148538886553602') return;
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
    bot.guilds.cache.map(g =>
        table.push(
            [
                g.id, g.name, 
                g.members.cache.filter(u => !u.user.bot).size, 
                g.members.cache.filter(u => u.user.bot).size, 
                g.members.cache.size
            ]
        )
    );
    // console.log(table.toString());
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r => message.channel.send(`Im inside these servers! http://hastebin.com/` + r.body.key));
};

exports.help = {
    name: 'serverlist'
};
