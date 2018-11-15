const isgd = require("isgd");
const isURL = require("is-url");

exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars

  if(args[0] == "help"){
    message.reply("Usage: ;shorten <link>");
    return;
}
  
   await message.delete()

    message.channel.startTyping();
  if (args.length === 0) {
    message.channel.stopTyping();
    message.reply("**you need to provide a URL to shorten!**");
  } else {
    if (isURL(args[0])) {
      isgd.shorten(args[0], (res) => {
        message.channel.stopTyping();
        message.channel.send(res);
      });
    } else {
      message.channel.stopTyping();
      message.reply("you need to provide a URL to shorten!");
    }
  }
};

exports.config = {
  aliases: [  ]
};

module.exports.help = {
    name: "shorten"
}