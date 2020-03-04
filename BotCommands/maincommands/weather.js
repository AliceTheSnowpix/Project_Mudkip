const weather = require('weather-js');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
        if (err) message.channel.send(err);
        if (result === undefined || result.length === 0) {
            message.reply('**Please enter a valid location.**');
            return;
        }

        var current = result[0].current;
        var location = result[0].location; 
        const wembed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`) 
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("#00AE86")
        .addField('Timezone',`UTC${location.timezone}`, true) 
        .addField('Degree Type',location.degreetype, true)
        .addField('Temperature',`${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds',current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true);
        message.channel.send(wembed);
    });
}

exports.help = {
    name: "weather"
}
