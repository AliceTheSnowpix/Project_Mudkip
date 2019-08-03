const figlet = require('figlet');
const Discord = require("discord.js")

exports.run = async(bot, message, args) => {
    if (!args.join(" ")) return message.reply("**Please Tell Me What text you want me what you want me to asciify**")
    let maxLen = 22 // You can modify the max characters here

    if(args.join(' ').length > maxLen) return message.channel.send('**I can only asciify 22 letters**')
  
    figlet(`${args.join(' ')}`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
  
        message.channel.send(`${data}`, {code: 'AsciiArt'});
    });
}

exports.help = {
    name: 'ascii'
}
