const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let shembed = new Discord.RichEmbed()
    .setDescription("Song Help Menu")
    .setColor("#FF00EC")
    .addField("Song Commands", "alien, alive, bad, bellyache, bored, break, broken, broken2, burn, copycat, crown, damn, dirty, ending, enemies, entropy, fakelove, fireflies, friends, friendship, god, happysong, hostage, idwbya, japanese, lovely, lush, middle, motto, my, myboy, nights, ocean, off, og, panic, pumpedup, ripsong, rocksong, sadsong, side, six, ski, snow, something, starting, summertime, sun, sunshine, surf, team, tennis, trials, and why")
    
    message.channel.send(shembed)
} 

exports.config = {
    aliases: [ 'sh' ]
};

module.exports.help = {
    name: "songhelp"
}