exports.run = async (bot, message, _args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSetting');
    let song = await GuildSettings.fetch(`song_${message.guild.id}`);
    let queue = await GuildSettings.fetch(`queue_${message.guild.id}`);
    let off = await GuildSettings.fetch(`noloop_${message.guild.id}`);
    
    let helpembed = new bot.discord.MessageEmbed()
    .setTitle('Loop Menu')
    .setColor('RANDOM')
    .setDescription('To loop the current song respond with **__song__**.\nTo loop the queue respond with **__queue__**\nTo turn off looping respond with **__off__**');
    message.channel.send(helpembed);
    
    let response;
    try {
        response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
        });
    } catch (err) {
        message.channel.send('You did not send a vaild response or you did not respond in time.');
    }
    
    if (response.first().content.toLowerCase() === 'song') {
        GuildSettings.set(`song_${message.guild.id}`, true);
        GuildSettings.set(`queue_${message.guild.id}`, false);
        GuildSettings.set(`noloop_${message.guild.id}`, false);
        message.channel.send('The current song will now be looped');
    } else if (response.first().content.toLowerCase() === 'song' && song === true) {
        message.channel.send('The current song is already being looped');
    } else if (response.first().content.toLowerCase() === 'queue') {
        GuildSettings.set(`song_${message.guild.id}`, false);
        GuildSettings.set(`queue_${message.guild.id}`, true);
        GuildSettings.set(`noloop_${message.guild.id}`, false);
        message.channel.send('The queue will now be looped');

    } else if (response.first().content.toLowerCase() === 'queue' && queue === true) {
        message.channel.send('The queue is already being looped');
    } else if (response.first().content.toLowerCase() === 'off') {
        if (song === true) {
            GuildSettings.set(`song_${message.guild.id}`, false);
            GuildSettings.set(`noloop_${message.guild.id}`, true);
            message.channel.send('The current song will no longer be looped.');
        }

        if (queue === true) {
            GuildSettings.set(`queue_${message.guild.id}`, false);
            GuildSettings.set(`noloop_${message.guild.id}`, true);
            message.channel.send('The queue will no longer be looped.');
        }
        if (song === false && queue === false && off === true) return message.channel.send('Nothing is currently being looped.');
    }
}

exports.help = {
    name: 'loop'
}