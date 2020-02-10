exports.run = async (bot,message,args) => {
  const Discord = bot.discord;
  const users = bot.users.array();
  const channels = bot.channels.array();
  let guildTotalOnline = 0;
  let guildTotalIdle = 0;
  let guildTotalDND = 0;
  let guildTotalOffline = 0;
  let totalOnline = 0;
  let totalIdle = 0;
  let totalDND = 0;
  let totalOffline = 0;
  let totalTextChannels = 0;
  let totalVoiceChannels = 0;

  for(let i = 0; i < users.length; i++) {
  	if (users[i].presence.status === 'online') {
  		totalOnline++;
  	} else if (users[i].presence.status === 'idle') {
      totalIdle++;
    } else if (users[i].presence.status === 'dnd') {
      totalDND++;
    } else if (users[i].presence.status === 'offline') {
      totalOffline++;
    }
  }
  let nonGuildChannels = 0;
  for (let i = 0; i < channels.length; i++) {
  	if (channels[i].type === 'text') {
      totalTextChannels++;
    } else if (channels[i].type === 'voice') {
      totalVoiceChannels++;
    } else {
      nonGuildChannels++;
    }
  }

  let bicon = bot.user.displayAvatarURL;
  if (message.channel.type === 'dm') {
    let botEmbed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created By", bot.users.get('293148538886553602').tag)
      .addField("Created On", bot.user.createdAt)
      .addField("Total Members", "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online <a:online_loading:532718715045675010>\n`" + totalIdle + "` Idle <a:idle_loading:532710212692475904>\n`" + totalDND + "` Do Not Disturb <a:do_not_disturb_loading:532721835037425668>\n`" + totalOffline + "` Offline <a:oflline_loading:532721755333197854>")
      .addField("Total Channels", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice")
      .addField("Total Servers", bot.guilds.size)
      .addField("Ping", `${bot.pings[0]}ms`)
      .setTimestamp()
    return message.channel.send(botEmbed)
  } else {
    const guildMembers = message.guild.members.array();

    for(let i = 0; i < guildMembers.length; i++) {
      if (guildMembers[i].presence.status === 'online') {
        guildTotalOnline++;
      } else if (guildMembers[i].presence.status === 'idle') {
        guildTotalIdle++;
      } else if (guildMembers[i].presence.status === 'dnd') {
        guildTotalDND++;
      } else if (guildMembers[i].presence.status === 'offline') {
        guildTotalOffline++;
      }
    }
    
    let botembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created By", bot.users.get('293148538886553602').tag)
      .addField("Created On", bot.user.createdAt)
      .addField("Total Members", "`" + bot.users.size + "` Total\n`" + message.guild.memberCount + "` This Server\n`" + totalOnline + "` Online <a:online_loading:532718715045675010>\n`" + guildTotalOnline + "` Online This Server\n`" + totalIdle + "` Idle <a:idle_loading:532710212692475904>\n`" + guildTotalIdle + "` Idle This Server\n`" + totalDND + "` Do Not Disturb <a:do_not_disturb_loading:532721835037425668>\n`" + guildTotalDND + "` Do Not Disturb This Server\n`" + totalOffline + "` Offline <a:oflline_loading:532721755333197854>\n`" + guildTotalOffline + "` Offline This Server")
      .addField("Total Channels", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` This Server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice")
      .addField("Total Servers", bot.guilds.size)
      .addField("Ping", `${bot.pings[0]}ms`)
      .setTimestamp()
    return message.channel.send(botembed);
  }
}

exports.help = {
  name: "info",
  aliases: [ 'botinfo', 'bot-info' ]
}
