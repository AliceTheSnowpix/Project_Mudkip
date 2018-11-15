const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = async (bot, message, args) => {
    await message.delete().catch();
    if (args.length < 1) {
        return message.channel.send('Please provide some text to clapify');
    }
    
    message.channel.send(args.map(randomizeCase).join(':clap:'));
};

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'clap'
};