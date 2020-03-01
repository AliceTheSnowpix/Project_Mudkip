const request = require("request");
const gm = require("@tohru/gm").subClass({
    imageMagick: true
});

exports.run = async (bot, message, _args) => {
    const image = await bot.getImage(message).catch(error => {
        message.reply("you need to provide an image to implode!");
        console.log(error);
    });
    
    if (image !== undefined) {
        gm(request(image)).implode([1]).strip().stream((error, stdout) => {
            if (error) throw new Error(error);
            message.channel.send({
                files: [{
                    attachment: stdout,
                    name: "implode.png"
                }]
            });
        });
    }
}

exports.help = {
    name: "implode"
}
