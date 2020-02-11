const request = require('request-promise-native');

exports.run = async(_bot, message, args) => {
    let string = args.length ? args.join(' ') : message.author.tag;
    let options = {
        url: `https://robohash.org/${encodeURIComponent(string)}?set=set4`,
        encoding: null
    }

    let response = await request(options);
    await message.channel.send({
        files: [{
            attachment: response 
        }]
    });
}

exports.help = {
    name: 'catify'
}