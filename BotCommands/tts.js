exports.run = async(bot, message, args) => {

    message.delete();

    if(!args.join(" ")){
        return message.channel.send(":x: " + "| Please Enter Something For The Bot To Say")
    }
message.channel.send(args.join(" "), {
    tts: true,
    disableEveryone: true
   })
}

exports.config = {
    aliases: [  ]
};

exports.help = {
    name: 'tts'
}