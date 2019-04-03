const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry you cant use this command because you do not have the manage messages permission");
  
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    let errorEmbed = new Discord.RichEmbed()
    .setTitle('Incorect Command Usage')
    .setColor('PURPLE')
    .addField('Command usage', ';mute <member name / mention> <reason optional>')
    .addField('Server mute usage', ';mute server <member name / mention> <reason optional>')
    
    if(!Mute) return message.reply(errorEmbed);
    let arg = message.content.toLowerCase(); 
    let mreason = args.join(" ").slice(22);
    let mreasonS = args.join(" ").slice(32);
    if(Mute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");   

    if(arg === `;mute server ${Mute}`) {
        message.guild.channels.forEach(channel => {
            channel.overwritePermissions(message.guild.members.get(Mute.id),{
                SEND_MESSAGES: false
            });
         });
        
        let mutechanS = message.guild.channels.find(b => b.name === "modlogs");
        if(!mutechanS) return message.channel.send("Could not find modlogs channel");
        if(!mreasonS) {
            
        let muteembed2S = new Discord.RichEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted in all channels`)
        .addField("There was no reason given", `so I don't know why <@${Mute.id}> was muted`)

        message.delete().catch(O_o=>{});
        mutechanS.send(muteembed2S);

      }else{
        let muteembedS = new Discord.RichEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted in all channels`)
        .addField("Reason for mute", mreasonS)

        message.delete().catch(O_o=>{});
        mutechanS.send(muteembedS);
        return;
      }
        
    }else{
        message.channel.overwritePermissions(message.guild.members.get(Mute.id),{
            SEND_MESSAGES: false
        });
    
        let mutechan = message.guild.channels.find(b => b.name === "modlogs");
        if(!mutechan) return message.channel.send("Could not find modlogs channel");
        if(!mreason){

        let muteembed2 = new Discord.RichEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted`)
        .addField("There was no reason given", `so I don't know why <@${Mute.id}> was muted`)

        message.delete().catch(O_o=>{});
        mutechan.send(muteembed2);

      }else{
        let muteembed = new Discord.RichEmbed()
        .setAuthor('Muted by' + message.author.username)
        .addField('Muted in', message.channel.name)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted`)
        .addField("Reason for mute", mreason)

        message.delete().catch(O_o=>{});
        mutechan.send(muteembed);
        return;
      }
   }
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'mute'
};
