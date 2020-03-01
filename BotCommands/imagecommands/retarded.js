const Jimp = require('jimp');

exports.run =  async(_bot, message, args) => {
    var imgPath = "./BotCommands/assets/images/dog.png";
    var img;
    var text = "hello there :^D";

    if(args.length >= 1){
        text = args.join(" ");
    }

    Jimp.read(imgPath).then((image) => {
        img = image;
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    }).then((font) => {
        img.print(font, 350, 25, text, 280).write("./BotCommands/assets/images/img01.png", () => {
            message.channel.send({
                files: [{
                    attachment: "./BotCommands/assets/images/img01.png",
                    name: "dog.png"
                }]
            });
        });
    });
};
  
exports.help = {
    name: "retarded",
    aliases: ['dogsay']
};