exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    if (message.author.id !== '293148538886553602') return;
    let economycommands = ['buy', 'bubble', 'daily', 'give', 'inventory', 'leaderboard', 'pay', 'shop', 'take', 'work'];
    let games = ['betflip', 'slots'];
    let funcommands = ['8ball', 'achievement', 'ascii', 'bingo', 'blocktext', 'card', 'catify', 'clap', 'coin', 'copypaste', 'cowsay', 'destroy', 'diceroll', 'fliptext', 'joke', 'kms', 'mock', 'quote', 'retro', 'robotify', 'rip', 'rps', 'space', 'thisorthat', 'tiny', 'wouldyourather'];
    let imagecommands = ['brazzers', 'bunny', 'cat', 'deepfry', 'dog', 'duck', 'explode', 'funky', 'haah', 'hooh', 'implode', 'invert', 'magik', 'meme', 'owl', 'penguin', 'photo', 'rainbow', 'retarded', 'shutterstock', 'swirl', 'waaw', 'wall', 'woow'];
    let gifcommands = ['cookie', 'cuddle', 'gif', 'hug', 'pat', 'punch', 'slap', 'tickle'];
    let maincommands = ['advice', 'autouser', 'calc', 'color', 'google', 'help', 'info', 'invite', 'join', 'lmgtfy', 'numbers', 'numfact', 'rate', 'report', 'roleinfo', 'roles', 'say', 'server', 'shorten', 'swatch', 'time', 'tts', 'uptime', 'user', 'videoinfo', 'weather'];
    let modcommands = ['addrole', 'ban', 'clear', 'kick', 'mute', 'poll', 'removerole', 'settings', 'tempmute', 'unban', 'unmute'];
    let musiccommands = ['forceskip', 'loop', 'nowplaying', 'pause', 'play', 'queue', 'resume', 'shuffle', 'stop', 'summon', 'voteskip'];
    let ownercommands = ['dblstatsupdate', 'eval', 'exit', 'find', 'message-channel', 'message-server', 'reload', 'serverlist', 'webhook'];
    let songcommands = ['alien', 'alive', 'apricotjam', 'bad', 'bellyache', 'bored', 'break', 'broken', 'broken2', 'burn', 'copycat', 'cosmic', 'crown', 'damn', 'dirty', 'ending', 'enemies', 'entropy', 'fakelove', 'fireflies', 'friends', 'friendship', 'galaxy', 'god', 'happysong', 'hostahe', 'idwbya', 'japanese', 'lovely', 'lush', 'middle', 'motto', 'my', 'myboy', 'nights', 'ocean', 'off', 'og', 'panic', 'pumpedup', 'ripsong', 'rocksong', 'sadsong', 'shine', 'side', 'six', 'ski', 'smoothie', 'snow', 'something', 'spaceship', 'starting', 'story', 'summertime', 'sun', 'sunshine', 'surf', 'team', 'tennis', 'trials', 'warpstar', 'why'];

    try {
        let Aembed = new Discord.MessageEmbed()
        .setTitle("Reloading...")
        .setColor('RANDOM')
        .setDescription(`${args[0]}.js successfully reloaded!`);
        economycommands.forEach(economycommand => {
            if (args[0] == economycommand) {
                delete require.cache[require.resolve(`../economycommands/${args[0]}.js`)];
                let pull = require(`../economycommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        games.forEach(game => {
            if (args[0] == game) {
                delete require.cache[require.resolve(`../economycommands/games/${args[0]}.js`)];
                let pull = require(`../economycommands/games/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        funcommands.forEach(funcommand => {
            if (args[0] == funcommand) {
                delete require.cache[require.resolve(`../funcommands/${args[0]}.js`)];
                let pull = require(`../funcommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        imagecommands.forEach(imagecommand => {
            if (args[0] == imagecommand) {
                delete require.cache[require.resolve(`../imagecommands/${args[0]}.js`)];
                let pull = require(`../imagecommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });

        gifcommands.forEach(gifcommand => {
            if (args[0] == gifcommand) {
                delete require.cache[require.resolve(`../imagecommands/gifcommands/${args[0]}.js`)];
                let pull = require(`../imagecommands/gifcommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        maincommands.forEach(maincommand => {
            if (args[0] == maincommand) {
                delete require.cache[require.resolve(`../maincommands/${args[0]}.js`)];
                let pull = require(`../maincommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        modcommands.forEach(modcommand => {
            if (args[0] == modcommand) {
                delete require.cache[require.resolve(`../modcommands/${args[0]}.js`)];
                let pull = require(`../modcommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        musiccommands.forEach(musiccommand => {
            if (args[0] == musiccommand) {
                delete require.cache[require.resolve(`../musiccommands/${args[0]}.js`)];
                let pull = require(`../musiccommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        ownercommands.forEach(ownercommand => {
            if (args[0] == ownercommand) {
                delete require.cache[require.resolve(`../ownercommands/${args[0]}.js`)];
                let pull = require(`../ownercommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
        
        songcommands.forEach(songcommand => {
            if (args[0] == songcommand) {
                delete require.cache[require.resolve(`../songcommands/${args[0]}.js`)];
                let pull = require(`../songcommands/${args[0]}.js`);
                bot.commands.delete(pull);
                bot.commands.set(pull.help.name, pull);
                if (pull.help.aliases) {
                    pull.help.aliases.forEach(alias => {
                        bot.aliases.delete(pull);
                        bot.aliases.set(alias, pull);
                    });
                }
                console.log(`${args[0]}.js successfully reloaded!`);
                return message.channel.send(Aembed);
            }
        });
    } catch(e) {
        return message.channel.send(`Sorry, Don't have the command ${args[0]}`);
    }
}; 

exports.help = {
    name: "reload"
}