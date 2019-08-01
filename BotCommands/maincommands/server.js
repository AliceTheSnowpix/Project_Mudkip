const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if(message.channel.type === 'dm') return message.channel.send('This command only works in server.');
    let serverembed = new Discord.RichEmbed()

    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };

    serverembed.setDescription("this is the server info")
    .setColor("#27FF00")
    .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
    .addField("Server Name", message.guild.name)
    .addField("Created By", message.guild.owner)
    .addField("Joined At", message.member.guild.joinedAt)
    .addField("Member Count", message.guild.members.filter(u => !u.user.bot).size)
    .addField("Bot Count", message.guild.members.filter(u => u.user.bot).size)
    .addField("Total Members", message.guild.memberCount)
    .addField("Created On", message.guild.createdAt)
    .addField("ID:", message.guild.id)
    .addField("Region", region[message.guild.region], true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)    

    message.channel.send(serverembed);
}

exports.config = {
    aliases: [ 'serverinfo', 'server-info' ]
};

exports.help = {
  name: "server",
  aliases: [ 'serverinfo', 'server-info' ]
}
