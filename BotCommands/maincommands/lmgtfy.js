const encode = require('strict-uri-encode')

exports.run = async(bot, message, args, tools) => {

    if (args.length < 1) {
    return message.reply('**You must provide text to get a search result!**')
    }
    let question = encode(args.join(' '));
    let link =`https://lmgtfy.com/?q=${question}`
    message.channel.send(`**<${link}>**`)
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'lmgtfy'
}
