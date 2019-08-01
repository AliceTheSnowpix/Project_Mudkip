<<<<<<< HEAD
const request = require("request-promise-native").defaults({ encoding: null });
const imageCheck = require("image-type");

module.exports = (bot) => {
  // <String>.toPropercase() returns a proper-cased string such as:
  // "Mary had a little lamb".toProperCase() returns "Mary Had A Little Lamb"
  String.prototype.toProperCase = function() {
    return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  };

  // <String>.toFullWidth() returns a fullwidth string such as:
  // "Mary had a little lamb".toFullWidth() returns "Ｍａｒｙ ｈａｄ ａ ｌｉｔｔｌｅ ｌａｍｂ"
  String.prototype.toFullWidth = function() {
    return this.replace(/[A-Za-z0-9]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0); });
  };

  // <Array>.random() returns a single random element from an array
  // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  // `await bot.wait(1000);` to "pause" for 1 second
  bot.wait = require("util").promisify(setTimeout);

  // `bot.regexEscape(string);` to escape characters in a string for use with a regex
  bot.regexEscape = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  };

  // `bot.getImage(message);` to get the last uploaded image in a channel
  bot.getImage = (message) => {
    return new Promise(async (resolve, reject) => {
      // get list of messages in channel
      const messageList = message.channel.messages.sort(function(a, b) {
        return b.createdTimestamp - a.createdTimestamp;
      }).array();
      let attachmentFound = false;
      for (const messageCheck of messageList) {
        if (messageCheck.attachments.array().length !== 0) {
          const attachmentsList = messageCheck.attachments.array();
          // check if file is an image or not
          const image = await request(attachmentsList[0].url);
          // await bot.wait(500);
          const imageType = imageCheck(image);
          await bot.wait(500);
          if (["jpg", "png", "webp"].includes(imageType.ext)) {
            attachmentFound = true;
            resolve(attachmentsList[0].url);
          }
        } else if (messageCheck.embeds.length !== 0) {
          if (messageCheck.embeds[0].thumbnail) {
            const embedsList = messageCheck.embeds;
            // check if file is an image or not
            const image = await request(embedsList[0].thumbnail.url);
            // await bot.wait(500);
            const imageType = imageCheck(image);
            await bot.wait(500);
            if (["jpg", "png", "webp"].includes(imageType.ext)) {
              attachmentFound = true;
              resolve(embedsList[0].thumbnail.url);
            }
          } else if (messageCheck.embeds[0].image) {
            const embedsList = messageCheck.embeds;
            // check if file is an image or not
            const image = await request(embedsList[0].image.url);
            // await bot.wait(500);
            const imageType = imageCheck(image);
            await bot.wait(500);
            if (["jpg", "png", "webp"].includes(imageType.ext)) {
              attachmentFound = true;
              resolve(embedsList[0].image.url);
            }
          }
        }
      }
      if (!attachmentFound) {
        reject("Attachment not found");
      }
    });
  };

  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    bot.logger.error(`Uncaught Exception: ${errorMsg}`);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    bot.logger.error(`Unhandled rejection: ${err}`);
  });
=======
const request = require("request-promise-native").defaults({ encoding: null });
const imageCheck = require("image-type");

module.exports = (bot) => {
  // <String>.toPropercase() returns a proper-cased string such as:
  // "Mary had a little lamb".toProperCase() returns "Mary Had A Little Lamb"
  String.prototype.toProperCase = function() {
    return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  };

  // <String>.toFullWidth() returns a fullwidth string such as:
  // "Mary had a little lamb".toFullWidth() returns "Ｍａｒｙ ｈａｄ ａ ｌｉｔｔｌｅ ｌａｍｂ"
  String.prototype.toFullWidth = function() {
    return this.replace(/[A-Za-z0-9]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0); });
  };

  // <Array>.random() returns a single random element from an array
  // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  // `await bot.wait(1000);` to "pause" for 1 second
  bot.wait = require("util").promisify(setTimeout);

  // `bot.regexEscape(string);` to escape characters in a string for use with a regex
  bot.regexEscape = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  };

  // `bot.getImage(message);` to get the last uploaded image in a channel
  bot.getImage = (message) => {
    return new Promise(async (resolve, reject) => {
      // get list of messages in channel
      const messageList = message.channel.messages.sort(function(a, b) {
        return b.createdTimestamp - a.createdTimestamp;
      }).array();
      let attachmentFound = false;
      for (const messageCheck of messageList) {
        if (messageCheck.attachments.array().length !== 0) {
          const attachmentsList = messageCheck.attachments.array();
          // check if file is an image or not
          const image = await request(attachmentsList[0].url);
          // await bot.wait(500);
          const imageType = imageCheck(image);
          await bot.wait(500);
          if (["jpg", "png", "webp"].includes(imageType.ext)) {
            attachmentFound = true;
            resolve(attachmentsList[0].url);
          }
        } else if (messageCheck.embeds.length !== 0) {
          if (messageCheck.embeds[0].thumbnail) {
            const embedsList = messageCheck.embeds;
            // check if file is an image or not
            const image = await request(embedsList[0].thumbnail.url);
            // await bot.wait(500);
            const imageType = imageCheck(image);
            await bot.wait(500);
            if (["jpg", "png", "webp"].includes(imageType.ext)) {
              attachmentFound = true;
              resolve(embedsList[0].thumbnail.url);
            }
          } else if (messageCheck.embeds[0].image) {
            const embedsList = messageCheck.embeds;
            // check if file is an image or not
            const image = await request(embedsList[0].image.url);
            // await bot.wait(500);
            const imageType = imageCheck(image);
            await bot.wait(500);
            if (["jpg", "png", "webp"].includes(imageType.ext)) {
              attachmentFound = true;
              resolve(embedsList[0].image.url);
            }
          }
        }
      }
      if (!attachmentFound) {
        reject("Attachment not found");
      }
    });
  };

  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    bot.logger.error(`Uncaught Exception: ${errorMsg}`);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    bot.logger.error(`Unhandled rejection: ${err}`);
  });
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
};