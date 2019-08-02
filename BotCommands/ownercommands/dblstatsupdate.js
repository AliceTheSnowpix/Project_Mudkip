<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
const axios = require("axios")
require("dotenv").config()
const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
  if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
  message.channel.send("Updating Stats On Dbl")

  axios.post(`https://discordbotlist.com/api/bots/${process.env.BOT_ID}/stats`, {
<<<<<<< HEAD
=======
=======
axios = require("axios")
require("dotenv")
const ownerID = '293148538886553602'

exports.run = async (bot, message, args) => {
    if (message.author.id != ownerID) return message.channel.send("Bot Owner Only");
    message.channel.send("Updating Stats On Dbl")

axios.post(`https://discordbotlist.com/api/bots/${process.env.BOT_ID}/stats`, {
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    shard_id: 0,
    guilds: bot.guilds.size,
    users: bot.users.size,
    voice_connections: bot.voiceConnections.size,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
  }, {
    headers: {
      Authorization: `Bot ${process.env.DBLTOKEN}`,
    }
  }).catch(console.error);
<<<<<<< HEAD
=======
=======
}, {
    headers: {
        Authorization: `Bot ${process.env.DBLTOKEN}`,
    }
}).catch(console.error);
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}

exports.config = {
    aliases: [  ]
};
 
<<<<<<< HEAD
exports.help = {
  name: "updatestats",
  aliases: ['dblupdate']
=======
<<<<<<< HEAD
exports.help = {
  name: "updatestats",
  aliases: ['dblupdate']
=======
module.exports.help = {
  name: "updatestats"
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
}
