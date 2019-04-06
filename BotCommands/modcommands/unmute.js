const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry you cant use this command because you do not have the manage messages permission");
  
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    let errorEmbed = new Discord.RichEmbed()
    .setTitle('Incorect Command Usage')
    .setColor('PURPLE')
    .addField('Command usage', ';unmute <member name / mention> <reason optional>')
    
    if(!Mute) return message.reply(errorEmbed);
    let arg = message.content.toLowerCase(); 
    let mreason = args.join(" ").slice(22);
    
    if(Mute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't unmute them!"); 
    
     message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.members.get(Mute.id),{
            SEND_MESSAGES: true
        });
     });
    
    let mutechan = message.guild.channels.find(b => b.name === "modlogs");
    if(!mutechan) return message.channel.send("Could not find modlogs channel");
    if(!mreason){

    let muteembed2 = new Discord.RichEmbed()
    .setAuthor('Unmuted by' + message.author.username)
    .addField('Unmuted in', message.channel.name)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been unmuted`)
    .addField("There was no reason given", `so I don't know why <@${Mute.id}> was unmuted`)

    message.delete().catch(O_o=>{});
    mutechan.send(muteembed2);

  }else{
    let muteembed = new Discord.RichEmbed()
    .setAuthor('Muted by' + message.author.username)
    .addField('Muted in', message.channel.name)
    .setColor('PURPLE')
    .setThumbnail(Mute.user.avatarURL)
    .setTimestamp(message.createdAt)
    .setDescription(`<@${Mute.id}> has been unmuted`)
    .addField("Reason for unmute", mreason)

    message.delete().catch(O_o=>{});
    mutechan.send(muteembed);
    return;
  }
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'unmute'
};
