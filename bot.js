process.on('unhandledRejection', console.error)
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client()
const active = new Map();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.queue = new Map();
bot.skipvote = new Map();

bot.logger = require("./Modules/logger.js");
require("./Modules/functions.js")(bot);

let folders = ["songcommands", "musiccommands", "imagecommands", "funcommands", "modcommands", "maincommands", "economycommands", "ownercommands"]

folders.forEach(function(folder) {
  fs.readdir(`./BotCommands/${folder}/`, (err, files) => {
    if(err) console.log(err);

     let jsfile = files.filter(f => f.split(".").pop() === "js")
      if(jsfile.length <= 0){
        console.log("Could not find commands");
        return;
      } 

      jsfile.forEach((f, i) =>{
        let props = require(`./BotCommands/${folder}/${f}`);
        console.log(`${f} Files loaded`);
        bot.commands.set(props.help.name, props)
        props.config.aliases.forEach(alias => {
          bot.aliases.set(alias, props.help.name);
      });
    });
  });
});
                        
bot.on('ready', () => {
  const activities_list = [
    ";help commands",
    `${bot.users.size} users`,
    `${bot.guilds.size} servers`,
    `${bot.commands.size} commands`,
    null
  ];
  console.log(`${bot.user.username} is now ready for action`);
  /*bot.user.setPresence(
    {
      game: {
        name: "my owner is live",
        type: "STREAMING",
        url: "https://twitch.tv/clorox_bleach6"
      }
    });*/
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1))
    bot.user.setActivity(activities_list[index], {type: "LISTENING"});
  }, 5000);
});

bot.on("message", async message => {
  if(message.author.bot) return;

  let ops = {
    active: active
  };
  
  let bannedUsers = [];
  let dmembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(message.author.username)
    .setAuthor(message.author.id)
    .setDescription(message.content)
  const escapeRegex = str => str.replace(/[.*+?^{}()|[\]\\]/g, '\\$&');
  const prefix = new RegExp(`^<@!?${bot.user.id}> |^${escapeRegex(';')}`).exec(message.content);
  if (!prefix && message.channel.type === 'dm') {
    bot.users.get('293148538886553602').send(dmembed)
  } else if (!prefix) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0]
  const args = message.content.slice(prefix[0].length).trim().split(/ +/g);
  let cmd = bot.commands.get(args.shift().toLowerCase()) || bot.commands.get(bot.aliases.get(command.slice(prefix[0].length).toLowerCase()));
  if (cmd) {
    cmd.run(bot, message, args, ops);
  }
});

bot.on('guildMemberAdd', member => {
  if (member.guild.id !== '543906288820682752') {
   return 
  } else {
    member.guild.channels.get('559536623621111818').send('**' + member.user.username + '**, has joined the server!'); 
  }
});

require('dotenv').config();
var token = process.env.TOKEN;

bot.login(token);
