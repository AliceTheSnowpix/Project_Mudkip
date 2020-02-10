const moment = require('moment');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    const users = bot.users.array();
    const channels = bot.channels.array();
    let totalOnline = 0;
    let totalIdle = 0;
    let totalDND = 0;
    let totalOffline = 0;
    let totalTextChannels = 0;
    let totalVoiceChannels = 0;
  
    for (let i = 0; i < users.length; i++) {
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

    let botEmbed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("**Bot Name**", bot.user.username, true)
      .addField("**Bot Owner**", bot.users.get('293148538886553602').username, true)
      .addField("**Member Count**", `**${bot.users.size}** Total Members\n**${totalOnline}** Total Online Members <a:online_loading:532718715045675010>\n**${totalIdle}** Total Idle Members <a:idle_loading:532710212692475904>\n**${totalDND}** Total DND Members <a:do_not_disturb_loading:532721835037425668>\n**${totalOffline}** Total Offline Members <a:oflline_loading:532721755333197854>`)
      .addField("**Channel Count**", `**${(bot.channels.size - nonGuildChannels)}** Total Channels\n**${totalTextChannels}** Total Text Channels\n**${totalVoiceChannels}** Total Voice Channels`)
      .addField("**Server Count**", `**${bot.guilds.size}** Total Servers`)
      .addField("**Ping**", `${bot.pings[0]}ms`)
      .addField("**Creation Date**", moment(bot.user.createdAt).format('MMMM Do YYYY'))
      .setTimestamp();
    return message.channel.send(botEmbed);
}
  
exports.help = {
    name: "info",
    aliases: ['botinfo', 'bot-info']
}
