<<<<<<< HEAD
const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to add the New Funky Mode!");
    console.log(error);
  });
  if (image !== undefined) {
    message.channel.startTyping();
    const funkyMode = "./BotCommands/assets/images/funkymode.png";
    gm(request(image)).size((error, size) => {
      if (error) throw new Error(error);
      gm(request(image)).composite(funkyMode).gravity("NorthEast").resize(null, size.height).strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "funky.png"
          }]
        });
      });
    });
  }
};

exports.config = {
    aliases: [  ]
  };
  
  exports.help = {
      name: "funky",
=======
const request = require("request");
const gm = require("gm").subClass({
  imageMagick: true
});

exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  const image = await bot.getImage(message).catch(error => {
    message.reply("you need to provide an image to add the New Funky Mode!");
    console.log(error);
  });
  if (image !== undefined) {
    message.channel.startTyping();
    const funkyMode = "./BotCommands/assets/images/funkymode.png";
    gm(request(image)).size((error, size) => {
      if (error) throw new Error(error);
      gm(request(image)).composite(funkyMode).gravity("NorthEast").resize(null, size.height).strip().stream((error, stdout) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
          files: [{
            attachment: stdout,
            name: "funky.png"
          }]
        });
      });
    });
  }
};

exports.config = {
    aliases: [  ]
  };
  
  exports.help = {
      name: "funky",
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
  };