const { get } = require("snekfetch");

exports.run = async(bot, message, _args) => {
    const discord = bot.discord;
    const { body } = await get("https://rra.ram.moe/i/r?type=potato");
    let embed = new discord.RichEmbed()
    .setTitle("Click here if the image failed to load.")
    .setDescription('Here has a potato')
    .setColor(6192321)
    .setURL(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`)
    .setImage(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`);
    message.channel.send(embed);
}

exports.help = {
    name: 'potato'
}