exports.run = async (bot, message, args) => {
  
//   if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
//     return message.reply(":x: " + "| i need the \"MANAGE_MESSAGES\" permission!").catch(console.error);
//   }

  await message.delete()
    if (args.length < 1) {
return message.reply("**Please give me something to make emoji text**")
    }
  
    let blockedChars = args.join(' ').toLowerCase().
      replace(/[a-z]/g, ':regional_indicator_$&:').
      replace(/1/g, ':one:').
      replace(/2/g, ':two:').
      replace(/3/g, ':three:').
      replace(/4/g, ':four:').
      replace(/5/g, ':five:').
      replace(/6/g, ':six:').
      replace(/7/g, ':seven:').
      replace(/8/g, ':eight:').
      replace(/9/g, ':nine:').
      replace(/0/g, ':zero:');
  
     message.channel.send(blockedChars).catch(e => {
      bot.log.error(e);
    });
  };
  
  exports.config = {
    aliases: [  ]
};

  exports.help = {
    name:"block"
  }
