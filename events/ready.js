const db = require('quick.db');
const prefixes = new db.table('PREFIXES');

module.exports = bot => {
  const activities_list = [
    `;help commands`,
    `${bot.users.size} users`,
    `${bot.guilds.size} servers`,
    `${bot.commands.size} commands`,
    null
  ];
  console.log(`${bot.user.username} is now ready for action`);
  /*bot.user.setPresence(
    {
      game: {
        name: "my owner is live",
        type: "STREAMING",
        url: "https://twitch.tv/clorox_bleach6"
      }
    });*/
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1))
    bot.user.setActivity(activities_list[index], {type: "LISTENING"});
  }, 5000);
}