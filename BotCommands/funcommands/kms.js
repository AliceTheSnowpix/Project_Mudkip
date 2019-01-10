exports.run = function(bot, message) {
    
    message.channel.send(`<@${message.author.id}> has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, <@${message.author.id}>`); }, 1000);
    });
};

exports.config = {
    aliases: [  ]
};
      
exports.help = {
    name: "kms"
};
