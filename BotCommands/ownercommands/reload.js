const Discord = require("discord.js");
const ownerID = '293148538886553602';

exports.run = async (bot, message, args) => {
  if (message.author.id !== ownerID) return message.channel.send("Bot Owner Only");
  let economycommands = ['buy', 'bubble', 'daily', 'give', 'pay', 'shop', 'take']
  let funcommands = ['8ball', 'achievement', 'ascii', 'bingo', 'blocktext', 'card', 'clap', 'coin', 'cookie', 'copypaste', 'cowsay', 'destroy', 'diceroll', 'fliptext', 'joke', 'kms', 'mock', 'pat', 'punch', 'quote', 'retro', 'rip', 'rps', 'slap', 'space', 'thisorthat', 'tiny', 'wouldyourather']
  let imagecommands = ['brazzers', 'bunny', 'cat', 'deepfry', 'dog', 'duck', 'explode', 'funky', 'gif', 'implode', 'invert', 'magik', 'meme', 'owl', 'penguin', 'photo', 'rainbow', 'retarded']
  let maincommands = ['advice', 'autouser', 'calc', 'color', 'google', 'help', 'info', 'invite', 'join', 'lmgtfy', 'numbers', 'numfact', 'rate', 'report', 'roleinfo', 'roles', 'say', 'server', 'shorten', 'swatch', 'time', 'tts', 'uptime', 'user', 'videoinfo', 'weather']
  let modcommands = ['addrole', 'ban', 'clear', 'kick', 'mute', 'poll', 'removerole', 'settings', 'tempmute', 'unban', 'unmute']
  let musiccommands = ['forceskip', 'loop', 'nowplaying', 'pause', 'play', 'queue', 'resume', 'shuffle', 'stop', 'summon', 'voteskip']
  let ownercommands = ['dblstatsupdate', 'eval', 'exit', 'find', 'message-channel', 'message-server', 'reload', 'serverlist']
  try {
    let Aembed = new Discord.RichEmbed()
    .setTitle("Reloading...")
    .setColor('RANDOM')
    .setDescription(`${args[0]}.js successfully reloaded!`)
    economycommands.forEach(economycommand => {
      if (args[0] == economycommand) {
        delete require.cache[require.resolve(`../economycommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    funcommands.forEach(funcommand => {
      if (args[0] == funcommand) {
        delete require.cache[require.resolve(`../funcommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    imagecommands.forEach(imagecommand => {
      if (args[0] == imagecommand) {
        delete require.cache[require.resolve(`../imagecommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    maincommands.forEach(maincommand => {
      if (args[0] == maincommand) {
        delete require.cache[require.resolve(`../maincommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    modcommands.forEach(modcommand => {
      if (args[0] == modcommand) {
        delete require.cache[require.resolve(`../modcommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    maincommands.forEach(maincommand => {
      if (args[0] == maincommand) {
        delete require.cache[require.resolve(`../maincommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
    ownercommands.forEach(ownercommand => {
      if (args[0] == ownercommand) {
        delete require.cache[require.resolve(`../ownercommands/${args[0]}.js`)];
        console.log(`${args[0]}.js successfully reloaded!`);
        return message.channel.send(Aembed);
      }
    });
  } catch(e) {
    return message.channel.send("Sorry, Don't have the command")
  }
}; 

exports.help = {
  name: "reload"
}