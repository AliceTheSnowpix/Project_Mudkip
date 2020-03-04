const moment = require('moment');

exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
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
    
    let serverembed = new Discord.MessageEmbed()
    .setTitle('Server Info')
    .setColor("#27FF00")
    .setThumbnail(message.guild.iconURL ? message.guild.iconURL : bot.user.displayAvatarURL)
    .addField("Server Name:", message.guild.name)
    .addField("Server ID:", message.guild.id, true)
    .addField("Created By:", message.guild.owner, true)
    .addField("Bot Joined On:", moment(message.member.guild.joinedAt).format('MMMM Do YYYY'), true)
    .addField("Created On:", moment(message.guild.createdAt).format('MMMM Do YYYY'), true)
    .addField("Total Members:", message.guild.memberCount, true)
    .addField("Member Count:", message.guild.members.filter(u => !u.user.bot).size, true)
    .addField("Bot Count:", message.guild.members.filter(u => u.user.bot).size, true)
    .addField('Total Members Online:', totalOnline, true)
    .addField('Total Members Idle:', totalIdle, true)
    .addField('Total Members DND:', totalDND, true)
    .addField('Total Members Offline:', totalOffline, true)
    .addField("Region:", region[message.guild.region], true)
    .addField("Verification Level:", verifLevels[message.guild.verificationLevel], true)
    .addField("Roles:", message.guild.roles.size, true)
    .addField("Channels:", message.guild.channels.size, true)
    .addField('Total Categories:', totalCategories, true)
    .addField('Total Text Channels:', totalTextChannels, true)
    .addField('Total Voice Channels:', totalVoiceChannels, true)
    .setTimestamp();
    message.channel.send(serverembed);
}

exports.help = {
    name: "server",
    aliases: ['serverinfo', 'server-info']
}
