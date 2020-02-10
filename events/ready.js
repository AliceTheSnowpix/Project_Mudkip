module.exports = bot => {
    bot.guilds.forEach(guild => {
        guild.fetchMembers();
    });

    const activities = [';help commands', `${bot.users.size} users`, 
                        `${bot.guilds.size} servers`, `${bot.commands.size} commands`];
    console.log(`${bot.user.username} is now ready for action!`);

    let activityPos = 0;
    setInterval(() => {
        if (activityPos > activities.length) activityPos = 0;
        bot.user.setActivity(activities[activityPos], {type: "LISTENING"});
        activityPos++;
    }, 15000);
}