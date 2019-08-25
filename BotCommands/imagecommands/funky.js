const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => {
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to add the New Funky Mode!");
    console.log(error);
  });
  if (image !== undefined) {
    const funkyMode = "./BotCommands/assets/images/funkymode.png";
    gm(request(image)).size((error, size) => {
      if (error) throw new Error(error);
      gm(request(image)).composite(funkyMode).gravity("NorthEast").resize(null, size.height).strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "funky.png"
          }]
        });
      });
    });
  }
}

exports.help = {
  name: "funky",
};