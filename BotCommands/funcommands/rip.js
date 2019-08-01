exports.run = function(bot, message) {
    let rpuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rpuser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");
    

    message.channel.send(`${rpuser} has died so press f to pay respects.`).then(Message => {
        setTimeout(() => { Message.edit(`oh wait false alarm <@${message.author.id}> just said rip`); }, 1000);
        setTimeout(() => { Message.edit(`but Welcome back, ${rpuser} you are now gay cause <@${message.author.id}> said rip jk`); }, 4000);
    });
};

exports.config = {
    aliases: [  ]
};
      
exports.help = {
    name: "rip"
};
