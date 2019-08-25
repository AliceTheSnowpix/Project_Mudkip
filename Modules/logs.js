const Discord = require('discord.js');
const db = require('quick.db');

module.exports = bot => {
  bot.on('guildMemberAdd', async member => {
    const welcomechannel = new db.table('WELCOMECHANNEL');
    const welcomemessage = new db.table('WELCOMEMESSAGE');
    const autorole = new db.table('AUTOROLE');

    let defaultEmbed = new Discord.RichEmbed()
    .setTitle('**New User!**')
    .setColor('#ff8ef5')
    .setTimestamp()
    .setDescription(`Welcome to **${member.guild.name}**, **<@${member.user.id}>** Hope you have a good time here.`)

    let welcomeEmbed = new Discord.RichEmbed()
    .setTitle('**New User!**')
    .setColor('#ff8ef5')
    .setTimestamp()
    .addField(`Welcome To ${member.guild.name}`, `<@${member.user.id}> Please read the rules`)

    if (member.guild.id !== '543906288820682752') {
      const wc = await welcomechannel.fetch(`welcomechannel_${member.guild.id}`);
      if (wc === null || wc === undefined) welcomechannel.set(`welcomechannel_${member.guild.id}`, 'not set')
      const wm = await welcomemessage.fetch(`welcomemessage_${member.guild.id}`);
      if (wm === null || wm === undefined) welcomemessage.set(`welcomemessage_${member.guild.id}`, 'not set')
      const ar = await autorole.fetch(`autorole_${member.guild.id}`);
      if (ar === null || ar === undefined) autorole.set(`autorole_${member.guild.id}`, 'not set')
      const channel = member.guild.channels.get(wc);
      const role = member.guild.roles.get(ar);
      if (!channel) return;
      if (!role) return;
      else member.guild.members.get(member.user.id).addRole(role)
      if (wm === 'not set') channel.send(defaultEmbed);
      else channel.send(wm).catch(console.error);
    } else {
      member.guild.channels.get('559536623621111818').send(welcomeEmbed).catch(console.error); 
    }
  });
  
  bot.on('guildMemberRemove', async member => {
    const leavechannel = new db.table('LEAVECHANNEL');
    const leavemessage = new db.table('LEAVEMESSAGE');

    let defaultEmbed = new Discord.RichEmbed()
    .setTitle('**User Left!**')
    .setColor('#93f7ff')
    .setTimestamp()
    .setDescription(`Goodbye ${member.user.username} hope you had fun here.`)

    let leaveEmbed = new Discord.RichEmbed()
    .setTitle('**User Left!**')
    .setColor('#93f7ff')
    .setTimestamp()
    .setDescription(`It's been fun but **__${member.user.username}__** left the server`)

    if (member.guild.id !== '543906288820682752') {
      const lc = await leavechannel.fetch(`leavechannel_${member.guild.id}`);
      if (lc === null || lc === undefined) leavechannel.set(`leavechannel_${member.guild.id}`, 'not set')
      const lm = await leavemessage.fetch(`leavemessage_${member.guild.id}`);
      if (lm === null || lm === undefined) leavemessage.set(`leavemessage_${member.guild.id}`, 'not set')
      const channel = member.guild.channels.get(lc);
      if (!channel) return;
      if (lm === 'not set') channel.send(defaultEmbed);
      else channel.send(lm).catch(console.error);
    } else {
      member.guild.channels.get('559536623621111818').send(leaveEmbed); 
    }
  });
  
  bot.on('guildCreate', guild => {
    if (guild.id !== '608095729864540194') return
    else return guild.owner.send('Thank you for adding me to your server,')
  });
}