exports.run = async (bot, message, args) => {
  const discord = bot.discord;
  const db = bot.db;

  const songloop = new db.table('SONGLOOP');
  const queueloop = new db.table('QUEUELOOP');
  const noloop = new db.table('NOLOOP');

  let song = await songloop.fetch(`song_${message.guild.id}`);
  let queue = await queueloop.fetch(`queue_${message.guild.id}`);
  let off = await noloop.fetch(`noloop_${message.guild.id}`);
  
  let helpembed = new discord.RichEmbed()
  .setTitle('Loop Menu')
  .setColor('RANDOM')
  .setDescription('To loop the current song respond with **__song__**.\nTo loop the queue respond with **__queue__**\nTo turn off looping respond with **__off__**')
  message.channel.send(helpembed)
  
  let response;
  try {
    response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
      max: 1,
      time: 20000,
      errors: ['time']
    });
  } catch (err) {
    message.channel.send('You did not send a vaild response or you did not respond in time.')
  }
  
  if (response.first().content.toLowerCase() === 'song') {
    songloop.set(`song_${message.guild.id}`, true);
    queueloop.set(`queue_${message.guild.id}`, false);
    noloop.set(`noloop_${message.guild.id}`, false);
    message.channel.send('The current song will now be looped');
  } else if (response.first().content.toLowerCase() === 'song' && song === true) {
    message.channel.send('The current song is already being looped');
  } else if (response.first().content.toLowerCase() === 'queue') {
    songloop.set(`song_${message.guild.id}`, false);
    queueloop.set(`queue_${message.guild.id}`, true);
    noloop.set(`noloop_${message.guild.id}`, false);
    message.channel.send('The queue will now be looped')
  } else if (response.first().content.toLowerCase() === 'queue' && queue === true) {
    message.channel.send('The queue is already being looped');
  } else if (response.first().content.toLowerCase() === 'off') {
    if (song === true) {
      songloop.set(`song_${message.guild.id}`, false);
      noloop.set(`noloop_${message.guild.id}`, true);
      message.channel.send('The current song will no longer be looped.')
    }
    if (queue === true) {
      queueloop.set(`queue_${message.guild.id}`, false);
      noloop.set(`noloop_${message.guild.id}`, true);
      message.channel.send('The queue will no longer be looped.')
    }
    if (song === false && queue === false && off === true) return message.channel.send('Nothing is currently being looped.')
  }
}

exports.help = {
  name: 'loop'
}