process.on('unhandledRejection', console.error)
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client()
<<<<<<< HEAD
=======
const active = new Map();
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.queue = new Map();
bot.skipvote = new Map();
bot.logger = require("./Modules/logger.js");
require("./Modules/functions.js")(bot);
require("./Modules/logs.js")(bot);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

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
        if (props.help.aliases) {
          props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props);
          });
        }
    });
  });
});

require('dotenv').config();
let token = process.env.TOKEN;

bot.login(token);
