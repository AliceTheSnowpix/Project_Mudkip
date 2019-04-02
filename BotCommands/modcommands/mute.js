const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry you cant use this command because you do not have the manage messages permission");
  
    let Mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    
    let errorEmbed = new Discord.RichEmbed()
    .setTitle('Incorect Command Usage')
    .setColor('PURPLE')
    .addField('Command usage', ';mute <member name / mention>')
    .addField('Server mute usage', ';mute server <member name / mention>')
    
    if(!Mute) return message.reply(errorEmbed)
    let arg = message.content.toLowerCase() 
    let mreason = args.join(" ").split([arg, Mute]);
    if(Mute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");   

    if(arg === `;mute server ${Mute}`) {
        message.guild.channels.forEach(channel=> {
            channel.overwritePermissions(Mute,{
                VIEW_CHANNEL: true,
                SEND_MESSAGES: false
            });
         });
        
        let mutechan = message.guild.channels.find(b => b.name === "modlogs");
        if(!mutechan) return message.channel.send("Could not find modlogs channel");
        if(!mreason) {
            
        let muteembed2 = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted in all channels`)
        .addField("There was no reason given", "test")

        message.delete().catch(O_o=>{});
        mutechan.send(muteembed2);

      }else{
        let muteembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted in all channels`)
        .addField("Reason", mreason)

        message.delete().catch(O_o=>{});
        mutechan.send(muteembed);
        return;
      }
        
    }else{
        message.channel.overwritePermissions(Mute,{
            VIEW_CHANNEL: true,
            SEND_MESSAGES: false
        });
    
        let mutechan = message.guild.channels.find(b => b.name === "modlogs");
        if(!mutechan) return message.channel.send("Could not find modlogs channel");
        if(!mreason){

        let muteembed2 = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('PURPLE')
        .setThumbnail(Mute.user.avatarURL)
        .setTimestamp(message.createdAt)
        .setDescription(`<@${Mute.id}> has been muted`)
        .addField("There was no reason given", "test")

        message.delete().catch(O_o=>{});
        mutechan.send(muteembed2);

      }else{
        let muteembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
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
}

exports.config = {
  aliases: [  ]
};

exports.help = {
    name: 'mute'
};
