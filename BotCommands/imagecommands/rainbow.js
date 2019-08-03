const snek = require('snekfetch');
const fsn = require('fs-nextra');
const request = require("request");
const gm = require("gm").subClass({
    imageMagick: true
});
  
exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. :x:')
    if (!message.guild.member(message.mentions.users.first())){
    const image = await bot.getImage(message).catch(error => {
      message.reply("you need to provide an image to add a rainbow to");
      console.log(error);
    });
    if (image !== undefined) {
      message.channel.startTyping();
      const rainbow = "./BotCommands/assets/images/rainbow.png";
      gm(request(image)).size((error, size) => {
        if (error) throw new Error(error);
        gm(request(image)).composite(rainbow).gravity("NorthEast").resize(null, size.height).strip().stream((error, stdout) => {
          if (error) throw new Error(error);
          message.channel.stopTyping();
          message.channel.send({
            files: [{
              attachment: stdout,
              name: "rainbow.png"
            }]
          });
        });
      });
    }
  }

  const { Canvas } = require('canvas-constructor');
  if (message.guild.member(message.mentions.users.first())) {  
    const getSlapped = async (person) => {
      const plate = await fsn.readFile('./BotCommands/assets/images/rainbow.png');
      const png = person.replace('.gif', '.png');
      const { body } = await snek.get(png);
      return new Canvas(250, 250)
      .resetTransformation()
      .addImage(body, 0, 0, 250, 250)
      .addImage(plate, 0, 0, 250, 250)
      .toBuffer();
      }
    try {
      const person = message.mentions.users.first().avatarURL;
      const result = await getSlapped(person);
      await message.channel.send({ files: [{ attachment: result, name: 'rainbow.png' }] });
    } catch (error) {
      console.log(error);
    }
  }
}
  
exports.help = {
  name: "rainbow",
  aliases: ['gay']
};