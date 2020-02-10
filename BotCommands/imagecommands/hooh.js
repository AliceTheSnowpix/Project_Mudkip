const request = require("request");
const tempy = require("tempy");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => {
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to mirror!");
    console.log(error);
  });
  const hoohCrop = tempy.file({extension: "png"});
  const hoohFlip = tempy.file({extension: "png"});
  if (image !== undefined) {
    gm(request.get(image)).gravity("South").crop(0, "50%").strip().write(hoohCrop, (error) => {
      if (error) throw new Error(error);
      gm(hoohCrop).flip().strip().write(hoohFlip, (error) => {
        if (error) throw new Error(error);
        gm(hoohFlip).append(hoohCrop).strip().stream((error, stdoutFinal) => {
          if (error) throw new Error(error);
          message.channel.send({
            files: [{
              attachment: stdoutFinal,
              name: "hooh.png"
            }]
          });
        });
      });
    });
  }
}

exports.help = {
    name: 'hooh'
}