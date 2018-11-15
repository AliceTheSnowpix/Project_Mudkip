const snekfetch = require('snekfetch');
exports.run = async (bot, message, args) => {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.reply("**Please tell me what the name of the achievement should be**")
  if(title.length > 22 || contents.length > 22) return message.channel.send("Max Length: 22 Characters. Soz.").then(setTimeout(message.delete.bind(message), 1000));
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
   message.delete();

};

exports.config = {
  aliases: [ 'achiev', 'get' ]
};

exports.help = {
  name: 'achievement'
};