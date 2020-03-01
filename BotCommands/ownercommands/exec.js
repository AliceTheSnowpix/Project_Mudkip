const exec = require("child_process").exec;

exports.run = async(_bot, message, args) => {
    if (message.author.id !== '293148538886553602') return;
    exec (`${args.join(" ")}`, (error, stdout) => {
        const response = (error || stdout);
        message.channel.send(`Ran: ${message.content}\n\`\`\`${response}\`\`\``, {split: true}).catch(console.error);
    });
}

exports.help = {
    name: 'exec'
}