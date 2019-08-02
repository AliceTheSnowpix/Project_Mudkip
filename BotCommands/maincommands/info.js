const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
  const users = bot.users.array();
  const guildMembers = message.guild.members.array();
  const channels = bot.channels.array();
  let guildTotalOnline = 0;
  let totalOnline = 0;
  let totalTextChannels = 0;
  let totalVoiceChannels = 0;

  for(let i = 0; i < guildMembers.length; i++){
  	if(guildMembers[i].presence.status === 'online'){
  		guildTotalOnline++;
  	}
  }

  for(let i = 0; i < users.length; i++){
  	if(users[i].presence.status === 'online'){
  		totalOnline++;
  	}
  }
  let nonGuildChannels = 0;
  for(let i = 0; i < channels.length; i++){
  	if(channels[i].type === 'text')
  		totalTextChannels++
  	else if(channels[i].type === 'voice')
  		totalVoiceChannels++
  	else
  		nonGuildChannels++
  }

  let bicon = bot.user.displayAvatarURL;
  if(message.channel.type === 'dm') {
    let botEmbed = new Discord.RichEmbed()
      .setDescription("I'm a bot for discord created clorox_bleach so if you need any help please contact him, if you want to see all commands do ;help")
      .setColor('#E8FF00')
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created By", "<@293148538886553602>")
      .addField("Created On", bot.user.createdAt)
      .addField("Total Members", "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online\n`")
      .addField("Total Channels", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice")
      .addField("Total Servers", bot.guilds.size)
      .addField("Ping", `${bot.pings[0]}ms`)
      .setTimeStamp(message.createdAt)
    return message.channel.send(botEmbed)
  }
  let botembed = new Discord.RichEmbed()
    .setDescription("I'm a bot for discord created clorox_bleach so if you need any help please contact him, if you want to see all commands do ;help")
    .setColor("#E8FF00")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created By", "<@293148538886553602>")
    .addField("Created On", bot.user.createdAt)
    .addField("Total Members", "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online\n`" + message.guild.memberCount + "` this server\n`" + guildTotalOnline + "` online this server")
    .addField("Total Channels", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` this server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice")
	  .addField("Total Servers", bot.guilds.size)
	  .addField("Ping", `${bot.pings[0]}ms`)
	  .setTimestamp(message.createdAt)
  return message.channel.send(botembed);
}

exports.config = {
  aliases: [ 'botinfo', 'bot-info' ]
};

exports.help = {
<<<<<<< HEAD
  name: "info",
  aliases: [ 'botinfo', 'bot-info' ]
}
=======
<<<<<<< HEAD
  name: "info",
  aliases: [ 'botinfo', 'bot-info' ]
}
=======
  name: "info"   
}
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
