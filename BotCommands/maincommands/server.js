const moment = require('moment');

exports.run = async (bot, message, _args) => {
    if(message.channel.type === 'dm') return message.channel.send('This command only works in a server.');
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

    const guildMembers = message.guild.members.array();
    const channels = message.guild.channels.array();
    let totalOnline = 0;
    let totalIdle = 0;
    let totalDND = 0;
    let totalOffline = 0;
    let totalTextChannels = 0;
    let totalVoiceChannels = 0;
    let totalCategories = 0;

    for(let i = 0; i < guildMembers.length; i++) {
        if (guildMembers[i].presence.status === 'online') {
            totalOnline++;
        } else if (guildMembers[i].presence.status === 'idle') {
            totalIdle++;
        } else if (guildMembers[i].presence.status === 'dnd') {
            totalDND++;
        } else if (guildMembers[i].presence.status === 'offline') {
            totalOffline++;
        }
    }

    for (let i = 0; i < channels.length; i++) {
        if (channels[i].type === 'text') {
            totalTextChannels++;
        } else if (channels[i].type === 'voice') {
            totalVoiceChannels++;
        } else if (channels[i].type === 'category') {
            totalCategories++;
        }
    }
    
    let serverembed = new new bot.discord.MessageEmbed()
    .setTitle('Server Info')
    .setColor("#27FF00")
    .setThumbnail(message.guild.iconURL ? message.guild.iconURL : bot.user.displayAvatarURL)
    .addFields([{name: "Server Name:", value: message.guild.name},
                {name: "Server ID:", value: message.guild.id, inline: true},
                {name: "Created By:", value: message.guild.owner, inline: true},
                {name: "Bot Joined On:", value: moment(message.member.guild.joinedAt).format('MMMM Do YYYY'), inline: true},
                {name: "Created On:", value: moment(message.guild.createdAt).format('MMMM Do YYYY'), inline: true},
                {name: "Total Members:", value: message.guild.memberCount, inline: true},
                {name: "Member Count:",value:  message.guild.members.filter(u => !u.user.bot).size, inline: true},
                {name: "Bot Count:", value: message.guild.members.filter(u => u.user.bot).size, inline: true},
                {name: 'Total Members Online:', value: totalOnline, inline: true},
                {name: 'Total Members Idle:', value: totalIdle, inline: true},
                {name: 'Total Members DND:', value: totalDND, inline: true},
                {name: 'Total Members Offline:', value: totalOffline, inline: true},
                {name: "Region:", value: region[message.guild.region], inline: true},
                {name: "Verification Level:", value: verifLevels[message.guild.verificationLevel], inline: true},
                {name: "Roles:", value: message.guild.roles.size, inline: true},
                {name: "Channels:", value: message.guild.channels.size, inline: true},
                {name: 'Total Categories:', value: totalCategories, inline: true},
                {name: 'Total Text Channels:', value: totalTextChannels, inline: true},
                {name: 'Total Voice Channels:', value: totalVoiceChannels, inline: true}])
    .setTimestamp();
    message.channel.send(serverembed);
}

exports.help = {
    name: "server",
    aliases: ['serverinfo', 'server-info']
}
