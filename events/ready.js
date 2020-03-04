module.exports = bot => {
    // bot.guilds.cache.forEach(guild => {
    //     guild.fetchMembers();
    // });

    const activities = [';help commands', `${bot.users.cache.size} users`, 
                        `${bot.guilds.cache.size} servers`, `${bot.commands.size} commands`];
    console.log(`${bot.user.username} is now ready for action!`);

    let activityPos = 0;
    setInterval(() => {
        if (activityPos > (activities.length - 1)) activityPos = 0;
        bot.user.setActivity(activities[activityPos], {type: "LISTENING"});
        activityPos++;
    }, 15000);
}