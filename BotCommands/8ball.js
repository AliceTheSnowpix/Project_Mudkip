const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply("Usage: ;8ball <question>");
        return;
        }

        if(!args[1]) return message.reply("Please give me a question");
        let replies = ["yes", "no", "maybe", "try again later", "stop it get some help", "probably not", "no u", "signs point to you are gay", "probably", "mostlikely not", "mostlikely", "i don't know"];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        let ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#1401FF")
        .addField("Question", question)
        .addField("Answer", replies[result]);

        message.channel.send(ballembed)

}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "8ball"
}