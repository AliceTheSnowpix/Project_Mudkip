process.on('unhandledRejection', console.error)
const botconfig = require('./botconfig/botconfig.json');
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client()
const active = new Map();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.logger = require("./Modules/logger.js");
require("./Modules/functions.js")(bot);

let folders = ["songcommands", "musiccommands"]
fs.readdir(`./BotCommands/${folders}/`, (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  } 

  jsfile.forEach((f, i) =>{
    let props = require(`./BotCommands/${folders}/${f}`);
    console.log(`${f} Files loaded`);
    bot.commands.set(props.help.name, props)
    props.config.aliases.forEach(alias => {
    bot.aliases.set(alias, props.help.name);
});
});
});

/*fs.readdir("./BotCommands/songcommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./BotCommands/songcommands/${f}`);
      console.log(`${f} Files loaded`);
      bot.commands.set(props.help.name, props)
      props.config.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
  });
});
});

fs.readdir("./BotCommands/musiccommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./BotCommands/musiccommands/${f}`);
      console.log(`${f} Files loaded`);
      bot.commands.set(props.help.name, props)
      props.config.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
  });
});
});

fs.readdir("./BotCommands/imagecommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Could not find commands");
      return;
  } 

  jsfile.forEach((f, i) =>{
    let props = require(`./BotCommands/imagecommands/${f}`);
    console.log(`${f} Files loaded`);
    bot.commands.set(props.help.name, props)
    props.config.aliases.forEach(alias => {
    bot.aliases.set(alias, props.help.name);
});
});
});*/
                        
bot.on('ready', () => {
  const activities_list = [
    ";help commands",
    `${bot.users.size} users`,
    `${bot.guilds.size} servers`,
    null
  ];
  console.log(`${bot.user.username} is now ready for action`);
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
    let prefix = ';'
    let dmembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(message.author.username)
      .setAuthor(message.author.id)
      .setDescription(message.content)
    if (!message.content.startsWith(prefix) && message.channel.type === 'dm'){
      bot.users.get('293148538886553602').send(dmembed)
    }else if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let cmd;
    if (bot.commands.has(command)) {
      cmd = bot.commands.get(command);
    } else if (bot.aliases.has(command)) {
      cmd = bot.commands.get(bot.aliases.get(command));
    }
    
    if (cmd) {
      cmd.run(bot, message, args, ops);
    }
  }); 
const ownerID = '293148538886553602'
const prefix = ';'
var isPlaying = false
//The variable round is a placeholder for now, is increased every round.
var round = 0
//Empty variable for stats.
var stats = {}
//Starts the bot.
bot.on('message', async (msg) => {
  //If the enemy is under 1 hp they die.
  if(stats.HP < 1 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.send('Good job, you killed the foe.')
    msg.channel.type
  }
  //If you are under 1 hp, you die.
  if(stats.plrHP < 1 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.send('You died!')
  }
      var input = msg.content.toLowerCase();
//Starts the game and sets the stats.
if(input === prefix + "start" && isPlaying == false) {
  //Here is the enemy creation framework.
  stats.enemies = ['Titan', 'Green Slime', 'Demon', 'Mage', 'Blue Slime', 'Red Slime', 'Goblin', 'Skeleton']
    stats.enemy = stats.enemies[Math.floor(Math.random() * stats.enemies.length)]
    //Copy this IF statement and add your enemy to the stats.enemies array, then change Slime to your new enemy.
    //stats.HP is how much health the new enemy will have, and attackMul is multiplies the damage by your number.
  if(stats.enemy == 'Green Slime') {
    stats.attackMul = 1.0
      stats.HP = 30
  }
  if(stats.enemy == 'Blue Slime') {
    stats.attackMul = 1.25
      stats.HP = 35
  }
  if(stats.enemy == 'Red Slime') {
    stats.attackMul = 1.50
      stats.HP = 40
  }
  if(stats.enemy == 'Titan') {
    stats.attackMul = 0.5
      stats.HP = 65
  }
  if(stats.enemy == 'Demon') {
    stats.attackMul = 2.5
      stats.HP = 35
  }
  if(stats.enemy == 'Mage') {
    stats.attackMul = 3.0
      stats.HP = 25
  }
  if(stats.enemy == 'Goblin') {
    stats.attackMul = 1.25
      stats.HP = 45
  }
  if(stats.enemy == 'Skeleton') {
    stats.attackMul = 0.75
      stats.HP = 50
  }
  stats.cooldown = 1
  stats.cooldown = 1
  round = round + 1
  isPlaying = true

  stats.plrHP = 40
  stats.maxHP = stats.plrHP
  stats.Mana = 50
stats.fireUsed = 0
  stats.onFire = false
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}

//Attacks the foe.
if(input === "attack" && isPlaying == true) {

  if(stats.attackMul == 0.5) {
      attackDmg = Math.floor(Math.random() * 16) + 3 / 2
  }
  if(stats.attackMul == 0.75) {
    attackDmg = Math.floor(Math.random() * 16) + 3 / 3

  }
  if(stats.attackMul != 0.5) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  if(stats.attackMul != 0.75) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  stats.attackChance = ['1', '2', '3', '4', '1', '1', '1', '1', '1', '1']
  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]
  if(stats.missChance == 10) {
    msg.channel.send('You missed and lost a turn.')
    stats.plrHP = stats.plrHP - attackDmg
      msg.channel.send('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
      round = round + 1
          stats.cooldown = 1
                    stats.cooldown2 = 1
      if(stats.onFire == true && isPlaying == true) {
            msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
        stats.toTakeAway = 5 * stats.fireUsed
    stats.HP = stats.HP - stats.toTakeAway

    msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
      }

      msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
  }
  if(stats.missChance != 10) {
    stats.plrHP = stats.plrHP - attackDmg
      msg.channel.send('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
      round = round + 1
          stats.cooldown = 1
          msg.channel.send('You did ' + attackDmg + ' damage.')
          stats.HP = stats.HP - attackDmg
          stats.cooldown2 = 1
      if(stats.onFire == true && isPlaying == true) {
        var attackDmg = Math.floor(Math.random() * 15) + 4

        stats.toTakeAway = 5 * stats.fireUsed
    stats.HP = stats.HP - stats.toTakeAway

    msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
      }
      msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
  }

}

//If you say "heal" and you have enough Mana this code will execute.
if(input === "heal" && isPlaying == true && stats.Mana > 24) {
  var heal = Math.floor(Math.random() * 13) + 6
  stats.test = heal + stats.plrHP
  stats.plrHP = stats.plrHP + heal
  stats.Mana = stats.Mana - 25
  msg.channel.send('You healed for ' + heal + ' hitpoints and used 25 mana.')
  msg.channel.send('The foe didn\'t attack.')
  round = round + 1
      stats.cooldown = 1
                stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
//If you dont have enough mana this triggers.
if(input === "heal" && isPlaying == true && stats.Mana < 25) {
msg.channel.send('You don\'t have enough Mana!')
}
if(input === "fireball" && isPlaying == true && stats.Mana > 5) {

  if(stats.attackMul == 0.5) {
      attackDmg = Math.floor(Math.random() * 16) + 3 / 2
  }
  if(stats.attackMul == 0.75) {
    attackDmg = Math.floor(Math.random() * 16) + 3 / 3

  }
  if(stats.attackMul != 0.5) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  if(stats.attackMul != 0.75) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  stats.attackChance = ['1', '1', '1', '1', '5', '1', '1', '1', '1', '1']
  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]
  if(stats.missChance == 5) {
    msg.channel.send('You missed and lost a turn.')
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.send('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
  round = round + 1
    stats.cooldown = 1
              stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway
}
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')



} else {
  var attackDmg = Math.floor(Math.random() * 6) + 2
stats.fireUsed = stats.fireUsed + 1
  stats.Mana = stats.Mana - 3
      stats.cooldown = 1
          stats.cooldown2 = 1
  msg.channel.send('You shot a fireball at the enemy and used 5 mana.')
  stats.onFire = true
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.send('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
  round = round + 1
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
}

//If you dont have enough mana this triggers.
if(input === "fireball" && isPlaying == true && stats.Mana < 5) {
msg.channel.send('You don\'t have enough Mana!')
}


if(input === "shield" && isPlaying == true && stats.Mana > 5 && stats.cooldown == 1) {

  msg.channel.send('You blocked the incoming attack.')
  attackDmg = 0.5
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.send('The shield blocked most of the damage from the ' + stats.enemy + ' but you still lost ' + attackDmg + ' HP.')
  round = round + 1
  stats.cooldown = 1
  stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
                stats.toTakeAway = 5 * stats.fireUsed
        stats.HP = stats.HP - stats.toTakeAway

    msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')


  }
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')



}
if(input === 'shield' && stats.cooldown == 0) {
  msg.channel.send('The shield is on cooldown.')
}

if(input === "leech" && isPlaying == true && stats.Mana > 9 && stats.cooldown2 == 1) {
  var heal = Math.floor(Math.random() * 5) + 2
  stats.test = heal + stats.plrHP
  stats.HP = stats.HP - heal
  stats.plrHP = stats.plrHP + heal
  stats.Mana = stats.Mana - 10
  msg.channel.send('You leeched the enemy for ' + heal + ' hitpoints and used 10 mana.')
  msg.channel.send('The foe didn\'t attack.')
  round = round + 1
    stats.cooldown2 = 0
      stats.cooldown = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.send('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  msg.channel.send(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
if(input === 'leech' && stats.cooldown2 == 0) {
  msg.channel.send('Leech is on cooldown.')
}
//If you dont have enough mana this triggers.
if(input === "leech" && isPlaying == true && stats.Mana < 10) {
msg.channel.send('You don\'t have enough Mana!')
}
})

require('dotenv').config();
var token = process.env.TOKEN;

bot.login(token);
