const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
            
    if(args[0] == "help"){
        message.reply("Usage: ;report  <issue>");
        return;
    }

    if(args.length < 1) return message.channel.send('you need to provide the issue you are having');
    let issue = args.join(' ');

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#FF0000")
    .addField("Reported From", message.guild.name)
    .addField("Reported By", message.author.username)
    //.addField("Reported In", message.guild.channel)
    .addField("Time", message.createdAt)
    .addField("Issue", issue);

    message.delete().catch(O_o=>{});
    await message.reply('your issue has been sent to the support server')
    bot.guilds.get('456629010890227714').channels.get('478108765707829254').send(reportEmbed);
    return;
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "report"
}
