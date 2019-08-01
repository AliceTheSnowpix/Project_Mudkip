let rps = ["**:moyai: rock**", "**:pencil: paper**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
exports.run = async (bot, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("**Please specify either rock, paper or scissors.**");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.reply(`**Please specify either rock, paper or scissors. ${choice} isn't one of those :P**`);
    msg.reply(random());
}

exports.config = {
  aliases: [  ]
};

exports.help = {
  name: 'rps'
};
