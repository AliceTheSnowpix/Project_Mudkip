const discord = require('discord.js');

exports.run = async(bot, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) 
        return message.reply("There is no music currently playing");

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp =`__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

    for (var i = 0; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
    }

    message.channel.send(resp);

}

exports.config = {
    aliases: [ 'q' ]
};

exports.help = {
    name: "queue"
}