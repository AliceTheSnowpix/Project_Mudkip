const isgd = require("isgd");
const isURL = require("is-url");

exports.run = async (bot, message, args) => {
  if (args.length === 0) {
    message.reply("**you need to provide a URL to shorten!**");
  } else {
    if (isURL(args[0])) {
      isgd.shorten(args[0], (res) => {
        message.channel.send(res);
      });
    } else {
      message.reply("you need to provide a URL to shorten!");
    }
  }
};

exports.help = {
  name: "shorten"
}
