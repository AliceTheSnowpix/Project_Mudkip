exports.run = async(_bot, message, args) => {
    if (!args.join(" ")) {
        return message.channel.send(":x: " + "| Please Enter Something For The Bot To Say")
    }
    message.channel.send(args.join(" "), {
        tts: true,
        disableEveryone: true
   });
}

exports.help = {
    name: 'tts'
}
