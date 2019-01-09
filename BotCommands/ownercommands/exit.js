const botconfig = require('./botconfig/botconfig.json');
const ownerID = '293148538886553602'
exports.run = async (bot, message) => {
    await message.delete().catch();
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    await message.channel.send(`Restarting will be back soon, ${botconfig.ownerID}!`);
    await process.exit(0).catch((e) => { console.error(e); });
};
  
exports.config = {
  aliases: [ 'restart', 'sleep' ]
};
  
exports.help = {
  name: "exit"
}; 
