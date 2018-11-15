const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;mute <user>");
        return;
    }
  
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!Mute) return message.reply("You need to give me someone to mute or the person you said is incorrect");
    let mreason = args.join(" ").slice(22);
    if(Mute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let muterole = message.guild.roles.find(a => a.name === "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    if(Mute.roles.has(muterole.id)) return message.reply("That person is already muted")
    await(Mute.addRole(muterole.id));
    let mutechan = message.guild.channels.find(b => b.name === "modlogs");
    if(!mutechan) return message.channel.send("Could not find modlogs channel");
  if(!mreason){

    let muteembed2 = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been muted`)
    .addField("There was no reason given", "So maybe next time a reason will be given")

    message.delete().catch(O_o=>{});
    mutechan.send(muteembed2);

  }else{
    let muteembed = new Discord.RichEmbed()
    .setAuthor(`<@${message.author.username}>`)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been muted`)
    .addField("Reason", mreason)

    message.delete().catch(O_o=>{});
    mutechan.send(muteembed);
    return;
  }
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'mute'
}