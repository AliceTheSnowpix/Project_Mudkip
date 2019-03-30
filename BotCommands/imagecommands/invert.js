const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const { invert } = require('../../util/Canvas');

exports.run = async (bot, message, args) => {
    const { body } = await request.get(image);
    const data = await loadImage(body);
    const canvas = createCanvas(data.width, data.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(data, 0, 0);
    invert(ctx, 0, 0, data.width, data.height);
    const attachment = canvas.toBuffer();
    if (Buffer.byteLength(attachment) > 8e+6) return message.reply('Resulting image was above 8 MB.');
    return message.channel.send({ files: [{ attachment, name: 'invert.png' }] });
}

exports.config = {
  aliases: [  ]
};
  
exports.help = {
  name: "invert",
};
