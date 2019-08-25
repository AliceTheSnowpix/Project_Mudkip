exports.run = async (bot, message, args) => {
    if (args[0] == "help" ){
        message.reply("Usage: ;number <lowest number> <highest number>");
        return;
    }
    let min = parseInt(args[0]);
    let max = parseInt(args[1]);

    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    var Result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(Result)) {
        return message.reply("**Please enter a min and a max number**")
    } else {
        message.channel.send(Result);
    }  
}

exports.help = {
name: "number"
}
