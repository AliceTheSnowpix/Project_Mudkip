const request = require("request");
const tempy = require("tempy");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => {
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to make a wall from!");
    console.log(error);
  });
  const imageResized = tempy.file({ extension: "png" });
  if (image !== undefined) {
    gm(request.get(image)).resize(128).strip().write(imageResized, (error) => {
      if (error) throw new Error(error);
      gm(imageResized).virtualPixel("tile").matteColor("none").out("-background", "none").resize("512x512!").out("-distort").out("Perspective").out("0,0,57,42 0,128,63,130 128,0,140,60 128,128,140,140").strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "wall.png"
          }]
        });
      });
    });
  }
}

exports.help = {
    name: 'wall'
}