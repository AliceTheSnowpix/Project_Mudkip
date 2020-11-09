exports.run = async(bot, message, args) => {
    const db = bot.db;
    const GuildSettings = new db.table('GuildSetting');

    if (message.channel.type === 'dm') return message.channel.send('This commamd only works in servers.');
    if (message.author.id !== '293148538886553602' && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('You need to have administrator permission in order to use this command');
    let prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        GuildSettings.set(`prefix_${message.guild.id}`, ';');
        prefix = ';';
    }

    let cmd = message.content.slice(prefix.length).toLowerCase().split(' ').slice(1, 2).join(' ');
    if (!cmd || cmd === 'help') {
        let helpembed = new bot.discord.MessageEmbed()
        .setTitle('Config Help Menu')
        .setColor('RANDOM')
        .addField('View This Menu:', `${prefix}config help`)
        .addField('Change Prefix:', `${prefix}set prefix <new prefix here>`)
        .addField('Set Welcome Channel: ', `${prefix}set welcomechannel <channel name here>`)
        .addField('Set Leave Channel:', `${prefix}set leavechannel <channel name here>`)
        .addField('Set Log Channel:', `${prefix}set logchannel <channel name here>`)
        .addField('Set Welcome Message:', `${prefix}set welcomemessage <your message here>`)
        .addField('Set Leave Message:', `${prefix}set leavemessage <your message here>`)
        .addField('Set Auto Role:', `${prefix}set autorole <role name here>`)
        .addField('Set Mod Role', `${prefix}set modrole <role name here>`)
        .addField('Set DJ Role', `${prefix}set djrole <role name here>`)
        .addField('Check Settings:', `${prefix}config list`)
        .addField('Reset All Settings:', `${prefix}config reset`);
        message.channel.send(helpembed);
    }
    
    if (cmd === 'prefix') {
        if (args[1] === undefined) {
            GuildSettings.set(`prefix_${message.guild.id}`, ';');
            return message.channel.send('You did not define the new prefix, I have changed it back to my default prefix.');

        } else if (args[1] === 'reset') {
            GuildSettings.set(`prefix_${message.guild.id}`, ';');
            return message.channel.send('The prefix has been reset to my default prefix');
        }

        const prefix = await GuildSettings.fetch(`prefix_${message.guild.id}`);
        if (!prefix || prefix === null || prefix === undefined) GuildSettings.set(`prefix_${message.guild.id}`, args[1]);
        else GuildSettings.set(`prefix_${message.guild.id}`, args[1]);
        message.channel.send(`I have changed my prefix to ${args[1]}`);
    }
    
    if (cmd === 'welcomechannel') {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name.toLowerCase().includes(message.content.slice(prefix.length).slice(2)) && c.type == "text");
        if (!channel) {
            GuildSettings.set(`welcomechannel_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify the channel you want for welcome messages.');
        }
        GuildSettings.set(`welcomechannel_${message.guild.id}`, channel.id);
        message.channel.send(`The welcome channel has been set to <#${channel.id}>`);
    }
    
    if (cmd === 'leavechannel') {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name.toLowerCase().includes(message.content.slice(prefix.length).slice(2)) && c.type == "text");
        if (!channel) {
            GuildSettings.set(`leavechannel_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify the channel you want for leave messages.');
        }
        
        GuildSettings.set(`leavechannel_${message.guild.id}`, channel.id);
        message.channel.send(`The leave channel has been set to <#${channel.id}>`);
    }
    
    if (cmd === 'logchannel') {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name.toLowerCase().includes(message.content.slice(prefix.length).slice(2)) && c.type == "text");
        let defaultchannel = message.guild.channels.find(b => b.name === "modlogs");
        if (!channel && !defaultchannel) {
            GuildSettings.set(`logchannel_${message.guild.id}`, 'not set ');
            return message.channel.send('Please specify the channel you want for moderation messages or create a channel called modlogs.');
        }
        
        GuildSettings.set(`logchannel_${message.guild.id}`, channel.id);
        message.channel.send(`The log channel has been set to <#${channel.id}>`);
    }

    if (cmd === 'welcomemessage') {
        if (args[1] === undefined) {
            GuildSettings.set(`welcomemessage_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify what you want the welcome message to be.');
        }
        
        GuildSettings.set(`welcomemessage_${message.guild.id}`, args.slice(1).join(' '));
        message.channel.send(`The welcome message has been set to ${args.slice(1).join(' ')}`);
    }
    
    if (cmd === 'leavemessage') {
        if (args[1] === undefined) {
            GuildSettings.set(`leavemessage_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify what you want the leave message to be');
        }
        
        GuildSettings.set(`leavemessage_${message.guild.id}`, args.slice(1).join(' '));
        message.channel.send(`The leave message has been set to ${args.slice(1).join(' ')}`);
    }
    
    if (cmd === 'autorole') {
        let role = args.slice(1).join(' ');
        let gRole = message.guild.roles.cache.find(a => a.name === role);
        let bRole = message.guild.roles.cache.find(b => b.name === 'project_chicken');
        if (!role) {
            GuildSettings.set(`autorole_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify the role you want every new member to have');
        }

        if (!gRole) {
            GuildSettings.set(`autorole_${message.guild.id}`, 'not set');
            return message.channel.send(`There is no role named **${role}**, Please check your spelling and try again.`);

        } else if (gRole.position > bRole.position || !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) {
            GuildSettings.set(`autorole_${message.guild.id}`, 'not set');
            return message.channel.send(`Please make sure I have a role above <@&${gRole.id}> and I have the manage roles permission.`);
        }
        GuildSettings.set(`autorole_${message.guild.id}`, gRole.id);
        message.channel.send(`Every new member will now get <@&${gRole.id}> role.`);
    }
      
    if (cmd === 'modrole') {
        let role = args.slice(1).join(' ');
        let gRole = message.guild.roles.cache.find(a => a.name.toLowerCase() === role);
        let permissions = ['MANAGE_MESSAGES', 'BAN_MEMBERS', 'KICK_MEMBERS', 'MANAGE_ROLES'];
        if (!role) {
            GuildSettings.set(`modrole_${message.guild.id}`, 'not set');
            return message.channel.send('Please specify a role.');
        }

        if (!gRole) {
            GuildSettings.set(`modrole_${message.guild.id}`, 'not set');
            return message.channel.send(`There is no role named **${role}**, Please check your spelling and try again`);
        }

        if (!gRole.hasPermission(permissions)) {
            message.channel.send(`<@&${gRole.id}> Is missing some mod permissions are you sure you want to add it? Respond with yes to add it.`);
            let response;
            try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                });
            } catch (err) {
                GuildSettings.set(`modrole_${message.guild.id}`, 'not set')
                message.channel.send('You did not send a vaild response or you did not respond in time.');
            }
            
            if (response.first().content.toLowerCase() === 'yes') {
                GuildSettings.set(`modrole_${message.guild.id}`, gRole.id);
                message.channel.send(`People with <@&${gRole.id}> will now be able to use mod commands`);
            } else if (response.first().content.toLowerCase() === 'no') {
                GuildSettings.set(`modrole_${message.guild.id}`, 'not set');
                message.channel.send('If you want to set the mod role make sure it has the following permissions: Manage Messages, Ban Members, Kick Members, and Manage Roles.');
            } else {
                GuildSettings.set(`modrole_${message.guild.id}`, 'not set');
                message.channel.send('If you want to set the mod role make sure it has the following permissions: Manage Messages, Ban Members, Kick Members, and Manage Roles.');
            }
        } else {
            GuildSettings.set(`modrole_${message.guild.id}`, gRole.id);
            message.channel.send(`People with <@&${gRole.id}> will now be able to use mod commands`);
        }
    }
    
    if (cmd === 'list') {
        let defaultchannel = message.guild.channels.find(b => b.name === "modlogs");
        const wc = await GuildSettings.fetch(`welcomechannel_${message.guild.id}`);
        const lc = await GuildSettings.fetch(`leavechannel_${message.guild.id}`);
        const mc = await GuildSettings.fetch(`logchannel_${message.guild.id}`);
        const wm = await GuildSettings.fetch(`welcomemessage_${message.guild.id}`);
        const lm = await GuildSettings.fetch(`leavemessage_${message.guild.id}`);
        const ar = await GuildSettings.fetch(`autorole_${message.guild.id}`);
        const mr = await GuildSettings.fetch(`modrole_${message.guild.id}`);

        let listembed = new bot.discord.MessageEmbed()
        .setTitle('Config List')
        .setColor('RANDOM')
        .addField('Prefix:', prefix)
        if (wc === null || wc === 'not set') listembed.addField('Welcome Channel:', 'not set');
        else listembed.addField('Welcome Channel:', `<#${wc}>`);
        if (lc === null || lc === 'not set') listembed.addField('Leave Channel:', 'not set');
        else listembed.addField('Leave Channel;:', `<#${lc}>`);
        if (mc === null || mc === 'not set' && !defaultchannel) listembed.addField('Log Channel:', 'not set');
        else if (mc === null || mc === 'not set' && defaultchannel) listembed.addField('Log Channel:', `<#${defaultchannel.id}>`)
        else listembed.addField('Log Channel:', `<#${mc}>`);
        if (wm === null || wm === 'not set') listembed.addField('Welcome Message:', 'not set');
        else listembed.addField('Welcome Message;', wm);
        if (lm === null || lm === 'not set') listembed.addField('Leave Message:', 'not set');
        else listembed.addField('Leave Message:', lm);
        if (ar === null || ar === 'not set') listembed.addField('Auto Role:', 'not set');
        else listembed.addField('Auto Role:', `<@&${ar}>`);
        if (mr === null || mr === 'not set') listembed.addField('Mod Role:', 'not set');
        else listembed.addField('Mod Role:', `<@&${mr}>`);
        message.channel.send(listembed);
    }
    
    if (cmd === 'reset') {
        GuildSettings.set(`prefix_${message.guild.id}`, ';');
        GuildSettings.set(`welcomechannel_${message.guild.id}`, 'not set');
        GuildSettings.set(`leavechannel_${message.guild.id}`, 'not set');
        GuildSettings.set(`leavechannel_${message.guild.id}`, 'not set');
        GuildSettings.set(`welcomemessage_${message.guild.id}`, 'not set');
        GuildSettings.set(`leavemessage_${message.guild.id}`, 'not set');
        GuildSettings.set(`autorole_${message.guild.id}`, 'not set');
        GuildSettings.set(`modrole_${message.guild.id}`, 'not set');
        message.channel.send('The settings have been reset to default.')
    }
}

exports.help = {
    name: 'settings',
    aliases: ['config']
}