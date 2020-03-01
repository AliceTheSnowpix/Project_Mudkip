const request = require("request");
const tempy = require("tempy");
const gm = require("@tohru/gm").subClass({
    imageMagick: true
});

exports.run = async (bot, message, _args) => {
    const image = await bot.getImage(message).catch(error => {
        message.reply("you need to provide an image to mirror!");
        console.log(error);
    });
    
    const haahCrop = tempy.file({extension: "png"});
    const haahFlip = tempy.file({extension: "png"});
    if (image !== undefined) {
        gm(request.get(image)).gravity("West").crop("50%", 0).strip().write(haahCrop, (error) => {
            if (error) throw new Error(error);
            gm(haahCrop).flop().strip().write(haahFlip, (error) => {
                if (error) throw new Error(error);
                gm(haahCrop).append(haahFlip, true).strip().stream((error, stdoutFinal) => {
                    if (error) throw new Error(error);
                    message.channel.send({
                        files: [{
                            attachment: stdoutFinal,
                            name: "haah.png"
                        }]
                    });
                });
            });
        });
    }
}

exports.help = {
    name: 'haah'
}