const Discord = require('discord.js')
const flipText = require('../assets/flipText.json');

module.exports.run = async (bot,message,args) => {
  await message.delete()
  if (args.length < 1) {
    return message.reply('**You must provide text to flip!**');
}

  args = args.join(' ');
  for (let i = 0; i < Object.keys(flipText).length; i++) {
    args = args.replace(Object.keys(flipText)[i], flipText[Object.keys(flipText)[i]]);
  }

  let ftembed = new Discord.RichEmbed()
  .setColor("#f3ff77")
  .setTitle("Fliped Texted")
  .setDescription(args.split('').reverse().join(''))
  
  message.channel.send(ftembed);
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'fliptext',
<<<<<<< HEAD
  aliases: ['flip']
=======
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
}
