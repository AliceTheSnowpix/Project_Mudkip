exports.run = async (_bot, message, _args) => {
    await message.delete().catch();
    if (message.author.id !== '293148538886553602') return;
    await message.channel.send(`Restarting will be back soon, <@293148538886553602>!`);
    await process.exit(0).catch((e) => {
        console.error(e); 
    });
};

exports.help = {
    name: "restart"
}; 
