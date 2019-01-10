const Discord = require('discord.js');
const botconfig = require('./botconfig/botconfig.json');

module.exports.run = async (bot,message,args) => {

    const users = bot.users.array();
    const guildMembers = message.guild.members.array();
    const channels = bot.channels.array();

    var guildTotalOnline = 0;
  		var totalOnline = 0;
  		var totalTextChannels = 0;
  		var totalVoiceChannels = 0;

  		for(var i = 0; i < guildMembers.length; i++){
  			if(guildMembers[i].presence.status === 'online'){
  				guildTotalOnline++;
  			}
  		}

  		for(var i = 0; i < users.length; i++){
  			if(users[i].presence.status === 'online'){
  				totalOnline++;
  			}
  		}
  		var nonGuildChannels = 0;
  		for(var i = 0; i < channels.length; i++){
  			if(channels[i].type === 'text')
  				totalTextChannels++
  			else if(channels[i].type === 'voice')
  				totalVoiceChannels++
  			else
  				nonGuildChannels++
  		}

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("I'm a bot for discord created clorox_bleach so if you need any help please contact him, if you want to see all commands do ;help")
        .setColor("#E8FF00")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created By", botconfig.ownerID)
        .addField("Created On", bot.user.createdAt)
        .addField("If You Are An Admin Do", ";bothelp")
        .addField("Total Members", "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online\n\n`" + message.guild.memberCount + "` this server\n`" + guildTotalOnline + "` online this server")
        .addField("Total Channels", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` this server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice")
		.addField("Total Servers", bot.guilds.size)
		.addField("Ping", `${bot.pings[0]}ms\``)
		.setTimestamp(message.createdAt)

        return message.channel.send(botembed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "info"
    
}
