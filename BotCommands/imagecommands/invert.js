const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => {
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to invert!");
    console.log(error);
  });
  if (image !== undefined) {
    gm(request(image)).negative().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "invert.png"
        }]
      });
    });
  }
};

exports.help = {
    name: "invert"
}
