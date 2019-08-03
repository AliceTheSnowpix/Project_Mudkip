const Discord = require('discord.js')
const botID = '460159835544092674'
exports.run = async(bot, message, args) => {

    let serverID = (456629010890227714)
    if (message.guild.id != serverID) return message.channel.send("Support Server Only Sorry Here Is The Link To Join https://discord.gg/fGQTVek");

    let shopembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('here are all shop items')
    .setDescription(`To buy an item use the commad ;buy <shop item number>`)
    .addField("Shop Item 1", '<@&481129804347867165> you need to pop 10 bubbles to buy this role.')
    .addField("Shop Item 2", "<@&481581654167781392> you need to pop 25 bubbles to buy this role.")
    .addField("Shop Item 3", "<@&481609753651576842> you need to pop 50 bubbles to buy this role.")
    .addField("Shop Item 4", "<@&481609899206508545> you need to pop 100 bubbles to buy this role.")
    .addField("Shop Item 5", "<@&481610167083991071> you need to pop 200 bubbles to buy this role.")
    .addField("Shop Item 6", "<@&481614285416431617> you need to pop 300 bubbles to buy this role.")
    .addField("Shop Item 7", "<@&481615302459785216> you need to pop 400 bubbles to buy this role.")
    .addField("Shop Item 8", "<@&481613362099126273> you need to pop 500 bubbles to buy this role.")
    .addField("Shop Item 9", "<@&481616059930247169> you need to pop 1000 bubbles to buy this role.")
    .addField("Shop Item 10", "<@&481615070930010122> you need to pop 5000 bubbles to buy this role.")
    .addField("Shop Item 11", "<#483550966965075968> you need to pop and pay 10000 bubbles to talk in this channel")
    .addField("Shop Item 12", "<#483551789254311937> you need to pop and pay 5 bubbles to talk in the channel")
    .addField("NOTE", "**to pop bubbles do the ;bubble command in <#481178520718934026> you can pop one bubble every 30 seconds.**")
    .setTimestamp(message.createdAt)
     
    message.channel.send(shopembed)

}

exports.help = {
    name: 'shop'
}
