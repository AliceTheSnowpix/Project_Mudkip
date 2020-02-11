exports.run = function(_bot, message, _args) {
    message.channel.send(`<@${message.author.id}> has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, <@${message.author.id}>`); }, 1000);
    });
};

exports.help = {
    name: "kms"
};