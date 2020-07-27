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
        .addFields([{name: 'Timezone', value: `UTC${location.timezone}`, inline: true}, 
                    {name: 'Degree Type', value: location.degreetype, inline: true},
                    {name: 'Temperature', value: `${current.temperature} Degrees`, inline: true},
                    {name: 'Feels Like', value: `${current.feelslike} Degrees`, inline: true},
                    {name: 'Winds', value: current.winddisplay, inline: true},
                    {name: 'Humidity', value: `${current.humidity}%`, inline: true}]);
        message.channel.send(wembed);
    });
}

exports.help = {
    name: 'weather'
}
