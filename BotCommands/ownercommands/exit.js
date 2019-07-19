const ownerID = '293148538886553602'
exports.run = async (bot, message) => {
    await message.delete().catch();
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    require('dotenv').config()
    let token = process.env.TOKEN;
    await message.channel.send('Restarting will be back soon, <@293148538886553602>!')
        .then(msg => bot.destroy())
        .then(() => bot.login(token));
};
  
exports.config = {
  aliases: [ 'restart', 'sleep' ]
};
  
exports.help = {
  name: "exit"
}; 
