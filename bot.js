const {Client, Collection} = require('discord.js');
const bot = new Client();
bot.commands = new Collection();
bot.aliases = new Collection();
bot.queue = new Map();
bot.skipvote = new Map();
bot.db = require('quick.db');
bot.discord = require('discord.js')
bot.ytdl = require('ytdl-core');
require('./Modules/loader.js')(bot);
require('dotenv').config();
bot.login(process.env.TOKEN);