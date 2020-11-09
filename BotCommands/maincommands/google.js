const request = require("request")
const cheerio = require('cheerio');

exports.run = async(bot, message, args) => {
    function getText(children) {
        if (children.children) return getText(children.children);
        return children.map(c => {
            return c.children ? getText(c.children) : c.data;
        }).join('');
    }
  
    if (args.length < 1){return message.channel.send("Hey you must provide a search term.")}
  
    message.channel.send(":arrows_counterclockwise: I am searching for your query...").then(
        request.get("https://google.com/search?client=chrime%rls=en&ie=UTF=9&oe=UTF-8&q=" + args.join("+"), (err, res, body) => {
        if (err || res.statusCode !== 200){
            message.channel.send(`Error ${res.statusCode}: ${res.statusMessage} try again later`)
        }
        let $ = cheerio.load(body);
        var results = [];
        $('.g').each((i) => {
            results[i] = {};
        });
        $('.g>.r>a').each((i, e) => {
            var raw = e.attribs['href'];
            results[i]['link'] = raw.substr(7, raw.indexOf('&sa=U') - 7);
        });
        $('.g>.s>.st').each((i, e) => {
            results[i]['description'] = getText(e);
        });

        var output = results.filter(r => r.link && r.description)
        .slice(0, 4)
        .map(r => `${r.link}\n\t${r.description}\n`)
        .join('\n');
        message.delete();

        let googembed = new bot.discord.MessageEmbed()
        .addFields([{name: 'Search Term', value: `${args.join(" ")}`, inline: true}, 
                    {name: 'Requested by', valus: `${message.author}`, inline: true},
                    {name: 'Search Results', value: output}])
        .setColor('RANDOM');
        message.channel.send(googembed);
    })).catch(console.error);
}
exports.help = {
    name: 'google'
}