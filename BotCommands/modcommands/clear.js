<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cam't use this command because you do not have the Mannage Messages permission.");    
  if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
    return message.reply(":x: " + "| I need the \"MANAGE_MESSAGES\" permission!").catch(console.error);
  }
  await message.delete()
  
  if(!args[0] || args[0] <= 0) return message.reply("please give me a number between 1 to 100.");
  if(args[0] >= 101) return message.reply('I can only delete 100 messages at a time.');
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(100));
  });
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: "clear"
<<<<<<< HEAD
=======
=======
module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;clear <number of messages>");
        return;
        }
    
        if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
            return message.reply(":x: " + "| I need the \"MANAGE_MESSAGES\" permission!").catch(console.error);
          }
    
           await message.delete()

if(!args[0]) return message.channel.send("please give me a number between 1 and 100");
message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(100));

});

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "clear"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
