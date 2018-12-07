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
}
