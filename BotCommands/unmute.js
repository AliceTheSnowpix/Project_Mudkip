const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant do that try again when mod");
    if(args[0] == "help"){
        message.reply("Usage: ;tempmute <user>");
        return;
    }
  
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!Mute) return message.reply("You need to give me someone to unmute or the person you said me is incorrect");
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
    if(!Mute.roles.has(muterole.id)) return message.reply("That person is not muted")
    await(Mute.removeRole(muterole.id));
    let unmutechan = message.guild.channels.find(b => b.name === "modlogs");
    if(!unmutechan) return message.channel.send("Could not find modlogs channel");

    if(!mreason){

      let unmuteembed2 = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor('PURPLE')
      .setThumbnail(Mute.user.avatarURL)
      .setTimestamp(message.createdAt)
      .setDescription(`<@${Mute.id}> has been unmuted`)
      .addField("There was no reason given", "So maybe next time a reason will be given")

      message.delete().catch(O_o=>{});
      unmutechan.send(unmuteembed2);

    }else{
    let unmuteembed = new Discord.RichEmbed()
    .setAuthor(`<@${message.author.username}>`)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been unmuted`)
    .addField("Reason", mreason);

    message.delete().catch(O_o=>{});
    unmutechan.send(unmuteembed);
    return;
    }
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'unmute'
}