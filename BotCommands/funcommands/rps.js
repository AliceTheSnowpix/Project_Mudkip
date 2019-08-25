let rps = ["**:moyai: rock**", "**:pencil: paper**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
exports.run = async (bot, message, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return message.reply("**Please specify either rock, paper or scissors.**");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`**Please specify either rock, paper or scissors. ${choice} isn't one of those :P**`);
    message.reply(random());
}

exports.help = {
  name: 'rps'
};