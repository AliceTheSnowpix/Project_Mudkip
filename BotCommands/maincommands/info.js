const moment = require('moment');

exports.run = async (bot, message, _args) => {
    const users = bot.users.cache.array();
    const channels = bot.channels.cache.array();
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

    let botEmbed = new bot.discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(bot.user.displayAvatarURL)
    .addFields([{name: '**Bot Name**', value: bot.user.username, inline: true},
                {name: '**Bot Owner**', value: bot.users.cache.get('293148538886553602').username, inline: true},
                {name: '**Member Count**', value: `**${bot.users.cache.size}** Total Members\n**${totalOnline}** Total Online Members <a:online_loading:532718715045675010>\n**${totalIdle}** Total Idle Members <a:idle_loading:532710212692475904>\n**${totalDND}** Total DND Members <a:do_not_disturb_loading:532721835037425668>\n**${totalOffline}** Total Offline Members <a:oflline_loading:532721755333197854>`},
                {name: '**Channel Count**', value: `**${(bot.channels.cache.size - nonGuildChannels)}** Total Channels\n**${totalTextChannels}** Total Text Channels\n**${totalVoiceChannels}** Total Voice Channels`},
                {name: '**Server Count**', value: `**${bot.guilds.cache.size}** Total Servers`},
                {name: '**Ping**', value: `${bot.ws.ping}ms`},
                {name: '**Creation Date**', value: moment(bot.user.createdAt).format('MMMM Do YYYY')}])
    .setTimestamp();
    return message.channel.send(botEmbed);
}
  
exports.help = {
    name: "info",
    aliases: ['botinfo', 'bot-info']
}
