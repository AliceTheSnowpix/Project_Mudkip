module.exports = bot => {
  const Discord = bot.discord;
  const db = bot.db;

  const prefixes = new db.table('PREFIXES');
  const welcomechannel = new db.table('WELCOMECHANNEL');
  const leavechannel = new db.table('LEAVECHANNEL');
  const logchannel = new db.table('LOGCHANNEL');
  const welcomemessage = new db.table('WELCOMEMESSAGE');
  const leavemessage = new db.table('LEAVEMESSAGE');
  const autorole = new db.table('AUTOROLE');
  const modrole = new db.table('MODROLE');
  const songloop = new db.table('SONGLOOP');
  const queueloop = new db.table('QUEUELOOP');
  const noloop = new db.table('NOLOOP');
  
  bot.on('guildMemberAdd', async member => {
    let defaultEmbed = new Discord.MessageEmbed()
    .setTitle('**New User!**')
    .setColor('#ff8ef5')
    .setTimestamp()
    .setDescription(`Welcome to **${member.guild.name}**, **<@${member.user.id}>** Hope you have a good time here.`)

    let welcomeEmbed = new Discord.MessageEmbed()
    .setTitle('**New User!**')
    .setColor('#ff8ef5')
    .setTimestamp()
    .addField(`Welcome To ${member.guild.name}`, `<@${member.user.id}> Please read the rules`)

    if (member.guild.id !== '543906288820682752') {
      const wc = await welcomechannel.fetch(`welcomechannel_${member.guild.id}`);
      const wm = await welcomemessage.fetch(`welcomemessage_${member.guild.id}`);
      const ar = await autorole.fetch(`autorole_${member.guild.id}`);
      const channel = member.guild.channels.cache.get(wc);
      const role = member.guild.roles.cache.get(ar);
      if (!channel) return;
      if (!role) return;
      else member.guild.members.cache.get(member.user.id).addRole(role)
      if (wm === 'not set') channel.send(defaultEmbed);
      else channel.send(wm).catch(console.error);
    } else {
      member.guild.channels.cache.get('559536623621111818').send(welcomeEmbed).catch(console.error); 
    }
  });
  
  bot.on('guildMemberRemove', async member => {
    let defaultEmbed = new Discord.MessageEmbed()
    .setTitle('**User Left!**')
    .setColor('#93f7ff')
    .setTimestamp()
    .setDescription(`Goodbye ${member.user.username} hope you had fun here.`)

    let leaveEmbed = new Discord.MessageEmbed()
    .setTitle('**User Left!**')
    .setColor('#93f7ff')
    .setTimestamp()
    .setDescription(`It's been fun but **__${member.user.username}__** left the server`)

    if (member.guild.id !== '543906288820682752') {
      const lc = await leavechannel.fetch(`leavechannel_${member.guild.id}`);
      const lm = await leavemessage.fetch(`leavemessage_${member.guild.id}`);
      const channel = member.guild.channels.cache.get(lc);
      if (!channel) return;
      if (lm === 'not set') channel.send(defaultEmbed);
      else channel.send(lm).catch(console.error);
    } else {
      member.guild.channels.cache.get('559536623621111818').send(leaveEmbed); 
    }
  });
  
  bot.on('guildCreate', async guild => {
    const prefix = await prefixes.fetch( `prefix_${guild.id}`);
    const wc = await welcomechannel.fetch(`welcomechannel_${guild.id}`);
    const wm = await welcomemessage.fetch(`welcomemessage_${guild.id}`);
    const lc = await leavechannel.fetch(`leavechannel_${guild.id}`);
    const lm = await leavemessage.fetch(`leavemessage_${guild.id}`);
    const mc = await logchannel.fetch(`logchannel_${guild.id}`);
    const mr = await modrole.fetch(`modrole_${guild.id}`);
    const ar = await autorole.fetch(`autorole_${guild.id}`);
    const song = await songloop.fetch(`song_${guild.id}`);
    const queue = await queueloop.fetch(`queue_${guild.id}`);
    const off = await noloop.fetch(`noloop_${guild.id}`);

    if (prefix !== undefined && wc !== undefined && wm !== undefined && lc !== undefined && lm !== undefined && mc !== undefined && mr !== undefined && ar !== undefined && song !== undefined && queue !== undefined && off  !== undefined
      || prefix !== null && wc !== null && wm !== null && lc !== null && lm !== null && mc !== null && mr !== null && ar !== null && song !== null && queue !== null && off !== null) return;
    else {
      prefixes.set( `prefix_${guild.id}`, ';');
      welcomechannel.set(`welcomechannel_${guild.id}`, 'not set');
      welcomemessage.set(`welcomemessage_${guild.id}`, 'not set');
      leavechannel.set(`leavechannel_${guild.id}`, 'not set');
      leavemessage.set(`leavemessage_${guild.id}`, 'not set');
      logchannel.set(`logchannel_${guild.id}`, 'not set');
      modrole.set(`modrole_${guild.id}`, 'not set');
      autorole.set(`autorole_${guild.id}`, 'not set');
      songloop.set(`song_${guild.id}`, false);
      queueloop.set(`queue_${guild.id}`, false);
      noloop.set(`noloop_${guild.id}`, true);
    }
  });
}