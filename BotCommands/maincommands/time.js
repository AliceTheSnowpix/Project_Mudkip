exports.run = async (bot, message, _args) => {
    const Discord = bot.discord;
    let date = new Date();
    let hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    let min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    let sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    let day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    let timeembed = new Discord.MessageEmbed()
    .setColor('#c464ea')
    .setTitle("Here Is The Time :clock:")
    .addField("Day Of The Year", month + "/" + day + "/" + year)
    .addField("Time OF The Day", hour + ":" + min + ":" + sec)
    .setTimestamp(message.createdAt);
    message.channel.send(timeembed);
}

exports.help = {
    name: "time"
}
