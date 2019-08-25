const { SlotMachine, SlotSymbol } = require("slot-machine");
const lemon = new SlotSymbol("lemon", { display: "🍋", points: 1, weight: 100 });
const watermelon = new SlotSymbol("watermelon", { display: "🍉", points: 1, weight: 100 });
const apple = new SlotSymbol("apple", { display: "🍎", points: 1, weight: 100 });
const grape = new SlotSymbol("grape", { display: "🍇", points: 1, weight: 100 });
const orange = new SlotSymbol("orange", { display: "🍊", points: 1, weight: 100 });
const cherry = new SlotSymbol("cherry", { display: "🍒", points: 1, weight: 100 });
const wild = new SlotSymbol("wild", { display: "❔", points: 1, weight: 40, wildcard: true });
const bell = new SlotSymbol("bell", { display: "🔔", points: 2, weight: 40 });
const clover = new SlotSymbol("clover", { display: "🍀", points: 3, weight: 35 });
const heart = new SlotSymbol("heart", { display: "❤", points: 4, weight: 30 });
const money = new SlotSymbol("money", { display: "💰", points: 5, weight: 25 });
const diamond = new SlotSymbol("diamond", { display: "💎", points: 10, weight: 3 });
const jackpot = new SlotSymbol("jackpot", { display: "🔅", points: 50, weight: 5});
const machine = new SlotMachine(3, [cherry, lemon, watermelon, apple, grape, orange, wild, bell, clover, heart, money, diamond, jackpot]);

exports.run = async(bot, message, args) => {
  const discord = bot.discord;
  const db = bot.db;
  let bubbles = await db.fetch(`bubbles_${message.author.id}`)
  let normal_fee = 10
  let custom_fee = args[0]
  const results = machine.play();
  let winnings = normal_fee * results.totalPoints;
  if (normal_fee > bubbles || custom_fee > bubbles) return message.channel.send(`You don't have enough bubbles to play the slots you need at least ${normal_fee} bubbles to use the slots.`);
  if (isNaN(custom_fee) || custom_fee <= 0) winnings = normal_fee * results.totalPoints;
  else winnings = custom_fee * results.totalPoints;
  const embed = new discord.RichEmbed()
  .setColor(6192321)
  .setAuthor("Slots")
  .setDescription(`${results.visualize(false)}\n\n${results.winCount === 0 ? `${message.member.displayName} has lost!\nBetter luck next time!` : `Whoa... ${message.member.displayName} won!`}\n\n${results.winCount === 0 ? "" : `**You have won ${winnings.toLocaleString()} bubbles**`}`)
  .setTimestamp();
  message.channel.send(embed);
  if (results.winCount > 0) return db.add(`bubbles_${message.author.id}`, winnings);
  if (results.winCount === 0 && isNaN(custom_fee) || custom_fee <= 0) return db.subtract(`bubbles_${message.author.id}`, normal_fee);
  else return db.subtract(`bubbles_${message.author.id}`, parseInt(custom_fee));
}

exports.help = {
  name: 'slots'
}