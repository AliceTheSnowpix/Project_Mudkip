<<<<<<< HEAD
const axios = require("axios")
require("dotenv").config()
const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
  if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
  message.channel.send("Updating Stats On Dbl")

  axios.post(`https://discordbotlist.com/api/bots/${process.env.BOT_ID}/stats`, {
=======
axios = require("axios")
require("dotenv")
const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    message.channel.send("Updating Stats On Dbl")

axios.post(`https://discordbotlist.com/api/bots/${process.env.BOT_ID}/stats`, {
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
    shard_id: 0,
    guilds: bot.guilds.size,
    users: bot.users.size,
    voice_connections: bot.voiceConnections.size,
<<<<<<< HEAD
  }, {
    headers: {
      Authorization: `Bot ${process.env.DBLTOKEN}`,
    }
  }).catch(console.error);
=======
}, {
    headers: {
        Authorization: `Bot ${process.env.DBLTOKEN}`,
    }
}).catch(console.error);
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
}

exports.config = {
    aliases: [  ]
};
 
<<<<<<< HEAD
exports.help = {
  name: "updatestats",
  aliases: ['dblupdate']
=======
module.exports.help = {
  name: "updatestats"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
}
