const ownerID = '293148538886553602'
exports.run = async (bot, message) => {
    await message.delete().catch();
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
<<<<<<< HEAD
    await message.channel.send('Restarting will be back soon, <@293148538886553602>!');
    await process.exit(0).catch((e) => { console.error(e); });
=======
<<<<<<< HEAD
    await message.channel.send('Restarting will be back soon, <@293148538886553602>!');
    await process.exit(0).catch((e) => { console.error(e); });
=======
    require('dotenv').config()
    let token = process.env.TOKEN;
    await message.channel.send('Restarting will be back soon, <@293148538886553602>!')
        .then(msg => bot.destroy())
        .then(() => bot.login(token));
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
};
  
exports.config = {
  aliases: [ 'restart', 'sleep' ]
};
  
exports.help = {
  name: "exit"
}; 
