const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to deep fry!");
    console.log(error);
  });
  if (image !== undefined) {
    message.channel.startTyping();
    gm(request(image)).colorspace("RGB").out("-brightness-contrast", "30x50").setFormat("jpg").quality(1).stream((error, stdout) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: stdout,
          name: "deepfry.jpg"
        }]
      });
    });
  }
};

exports.config = {
    aliases: [ 'df' ]
};

<<<<<<< HEAD
exports.help = {
  name: "deepfry",
  aliases: ['df']
=======
<<<<<<< HEAD
exports.help = {
  name: "deepfry",
  aliases: ['df']
=======
module.exports.help = {
    name: "deepfry"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
