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
  const woowCrop = tempy.file({extension: "png"});
  const woowFlip = tempy.file({extension: "png"});
  if (image !== undefined) {
    gm(request.get(image)).gravity("North").crop(0, "50%").strip().write(woowCrop, (error) => {
      if (error) throw new Error(error);
      gm(woowCrop).flip().strip().write(woowFlip, (error) => {
        if (error) throw new Error(error);
        gm(woowCrop).append(woowFlip).strip().stream((error, stdoutFinal) => {
          if (error) throw new Error(error);
          message.channel.send({
            files: [{
              attachment: stdoutFinal,
              name: "woow.png"
            }]
          });
        });
      });
    });
  }
}

exports.help = {
    name: 'woow'
}