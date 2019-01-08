const fs = require('fs');

exports.run = async() => {
fs.readdir("../../BotCommands/songcommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`../../BotCommands/songcommands/${f}`);
      console.log(`${f} Files loaded`);
      bot.commands.set(props.help.name, props)
      props.config.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
  });
});
});

fs.readdir("../../BotCommands/musiccommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`../../BotCommands/musiccommands/${f}`);
      console.log(`${f} Files loaded`);
      bot.commands.set(props.help.name, props)
      props.config.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
  });
});
});

fs.readdir("../../BotCommands/imagecommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  } 

  jsfile.forEach((f, i) =>{
    let props = require(`../../BotCommands/imagecommands/${f}`);
    console.log(`${f} Files loaded`);
    bot.commands.set(props.help.name, props)
    props.config.aliases.forEach(alias => {
    bot.aliases.set(alias, props.help.name);
});
});
});
}
