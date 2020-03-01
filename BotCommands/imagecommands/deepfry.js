const request = require("request");
const gm = require("@tohru/gm").subClass({
    imageMagick: true
});

exports.run = async (bot, message, _args) => {
    const image = await bot.getImage(message).catch(error => {
        message.reply("you need to provide an image to deep fry!");
        console.log(error);
    });
    if (image !== undefined) {
        gm(request(image)).colorspace("RGB").out("-brightness-contrast", "30x50").setFormat("jpg").quality(1).stream((error, stdout) => {
            if (error) throw new Error(error);
            message.channel.send({
                files: [{
                    attachment: stdout,
                    name: "deepfry.jpg"
                }]
            });
        });
    }
}

exports.help = {
    name: "deepfry",
    aliases: ['df']
}
