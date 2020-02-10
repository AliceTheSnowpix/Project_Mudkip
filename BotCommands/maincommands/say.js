exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
  if (!args.join(" ")) {
    return message.channel.send(":x: " + "| Please Enter Something For The Bot To Say");
  }
  let sayembed = new Discord.RichEmbed({
  disabelEveryone: true})
  .setColor('RANDOM')
  .setDescription(`<@${message.author.id}>`)
  .addField("Wanted me to say", args.join(" "))
  .setTimestamp(message.createdAt)

  message.channel.send(sayembed);
}

exports.help = {
    name: "say"
}
