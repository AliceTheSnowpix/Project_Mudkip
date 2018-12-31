const discord = require('discord.js');

exports.run = async(bot, message, args) => {
//#region help
    let arg = message.content.toLowerCase()
    if (arg === ';help') {
        let pages = ['Help Menu', 'General Info', 'Trobleshooting']
        let page = 1;
        const helpembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setDescription('If you want to see the commands from a category type ;help <category name>\n **Here are the following categories**\n Main\n Mod\n Fun\n Economy\n Image\n Music\n Songs')
        .setFooter(`Page ${page} of ${pages.length}`) 
        .setTitle(pages[page-1])

        if (message.channel.type === 'dm') message.author.send(helpembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let helpembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription('If you want to see the commands from a category type ;help <category name>\n **Here are the following categories**\n Main\n Mod\n Fun\n Economy\n Image\n Music\n Songs')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(helpembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('Project_chicken is a bot made by clorox_bleach#0001 using the discord.js framework.\n If you want to add the bot to your server use [this link](https://discordapp.com/oauth2/authorize?client_id=460159835544092674&scope=bot&permissions=301263990),\n To join the bot\'s support server use [this link](https://discord.gg/fGQTVek).\n All but the song category has 2 pages the first page has all the commands in a list, the second page has the discriptions for the commands.\n If you have any issuse with the bot or you want to request a song for a song command let my owner know.')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        let issueembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('If somethng is not working try checking to see if I have all of these permissions,\n manage roles\n manage server\n manage messages\n manage channels\n ban members\n kick members\n add reactions\n connect\n speak\n read messages\n attach files\n send messages\n embeded links.\n If I do have all those permissions and things are not working contact my owner about the issue')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(issueembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('Project_chicken is a bot made by clorox_bleach#0001 using the discord.js framework.\n If you want to add the bot to your server use [this link](https://discordapp.com/oauth2/authorize?client_id=460159835544092674&scope=bot&permissions=301263990),\n To join the bot\'s support server use [this link](https://discord.gg/fGQTVek).\n All but the song category has 2 pages the first page has all the commands in a list, the second page has the discriptions for the commands.\n If you have any issuse with the bot or you want to request a song for a song command let my owner know.')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                        }else if (page === 3) {
                            let issueembed = new discord.RichEmbed()
                                .setTitle(pages[page-1])
                                .setDescription('If somethng is not working try checking to see if I have all of these permissions,\n manage roles\n manage server\n manage messages\n manage channels\n ban members\n kick members\n add reactions\n connect\n speak\n read messages\n attach files\n send messages\n embeded links.\n If I do have all those permissions and things are not working contact my owner about the issue')
                                .setFooter(`Page ${page} of ${pages.length}`)
                                .setColor('#FF00EC')
                                msg.edit(issueembed)
                    }else if (page === 4) {
                        page = 3
                    }
                })
            })
        }).catch(console.error)
    } if (arg === ';help') {
        let pages = ['Help Menu', 'General Info', 'Trobleshooting']
        let page = 1;
        const helpembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setDescription('If you want to see the commands from a category type ;help <category name>\n **Here are the following categories**\n Main\n Mod\n Fun\n Economy\n Image\n Music\n Songs')
        .setFooter(`Page ${page} of ${pages.length}`) 
        .setTitle(pages[page-1])

        if (message.channel.type === 'text') message.channel.send(helpembed).then(msg => { 
    
            msg.react('⏪').then( r => { 
                msg.react('⏩') 
            
                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
                
                const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
                backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let helpembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription('If you want to see the commands from a category type ;help <category name>\n **Here are the following categories**\n Main\n Mod\n Fun\n Economy\n Image\n Music\n Songs')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(helpembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('Project_chicken is a bot made by clorox_bleach#0001 using the discord.js framework.\n If you want to add the bot to your server use [this link](https://discordapp.com/oauth2/authorize?client_id=460159835544092674&scope=bot&permissions=301263990),\n To join the bot\'s support server use [this link](https://discord.gg/fGQTVek).\n All but the song category has 2 pages the first page has all the commands in a list, the second page has the discriptions for the commands.\n If you have any issuse with the bot or you want to request a song for a song command let my owner know.')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        let issueembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('If somethng is not working try checking to see if I have all of these permissions,\n manage roles\n manage server\n manage messages\n manage channels\n ban members\n kick members\n add reactions\n connect\n speak\n read messages\n attach files\n send messages\n embeded links.\n If I do have all those permissions and things are not working contact my owner about the issue')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(issueembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('Project_chicken is a bot made by clorox_bleach#0001 using the discord.js framework.\n If you want to add the bot to your server use [this link](https://discordapp.com/oauth2/authorize?client_id=460159835544092674&scope=bot&permissions=301263990),\n To join the bot\'s support server use [this link](https://discord.gg/fGQTVek).\n All but the song category has 2 pages the first page has all the commands in a list, the second page has the discriptions for the commands.\n If you have any issuse with the bot or you want to request a song for a song command let my owner know.')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                        }else if (page === 3) {
                            let issueembed = new discord.RichEmbed()
                                .setTitle(pages[page-1])
                                .setDescription('If somethng is not working try checking to see if I have all of these permissions,\n manage roles\n manage server\n manage messages\n manage channels\n ban members\n kick members\n add reactions\n connect\n speak\n read messages\n attach files\n send messages\n embeded links.\n If I do have all those permissions and things are not working contact my owner about the issue')
                                .setFooter(`Page ${page} of ${pages.length}`)
                                .setColor('#FF00EC')
                                msg.edit(issueembed)
                    }else if (page === 4) {
                        page = 3
                    }
                })
            })
        
        })
//#endregion
//#region main
    }else if (arg === ';help main') {
        let pages = ['Main Help Menu', 'Main Commands Descriptions']
        let page = 1;
        const mainembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';autouser\n ;calc\n ;color \n ;google\n ;help\n ;info\n ;invite\n ;join\n ;lmgtfy\n ;numbers\n ;numfact\n ;rate\n ;report\n ;roles\n ;roleinfo\n ;say\n ;server\n ;shorten\n ;swatch\n ;time\n ;tts\n ;uptime\n ;user\n ;videoinfo\n ;weather')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(mainembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let mainembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';autouser\n ;calc\n ;color \n ;google\n ;help\n ;info\n ;invite\n ;join\n ;lmgtfy\n ;numbers\n ;numfact\n ;rate\n ;report\n ;roles\n ;roleinfo\n ;say\n ;server\n ;shorten\n ;swatch\n ;time\n ;tts\n ;uptime\n ;user\n ;videoinfo\n ;weather')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(mainembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('autouser: autofills the name of a user with the letters you give\n calc: a calculator for math stuff\n color: tells you info about the hex color code you send\n google: searches for the term on google then sends the results\n help: tellsyou all the commands\n info: sends info about the bot\n invite: sends the invites for the bot\n join: sends the link to join the support server\n lmgtfy: produce a lmgtfy (let me google that for you) URL\n number: finds a random number between the lowest and highest numbers you give\n numfact: gives a random fact about a number or a fact about a number you gave\n rate: rate someone or something\n report: report any bugs you find with the bot\n roles: shows all role names and ids in a list that are in the server\n roleinfo: sends info about a role in the server\n say: makes the bot say something\n server: sends info about the server\n shorten: this will shorten a url\n swatch: tells the time in internet beat time\n time: sends the current time of day and what day of the year it is\n tts: repeats your message in text to speach\n uptime: sends the current time the bot has been up and running\n user: sends info about you or another user\n videoinfo: shows you info about the youtube URL you send\n weather: sends the weather in the location you give')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('autouser: autofills the name of a user with the letters you give\n calc: a calculator for math stuff\n color: tells you info about the hex color code you send\n google: searches for the term on google then sends the results\n help: tellsyou all the commands\n info: sends info about the bot\n invite: sends the invites for the bot\n join: sends the link to join the support server\n lmgtfy: produce a lmgtfy (let me google that for you) URL\n number: finds a random number between the lowest and highest numbers you give\n numfact: gives a random fact about a number or a fact about a number you gave\n rate: rate someone or something\n report: report any bugs you find with the bot\n roles: shows all role names and ids in a list that are in the server\n roleinfo: sends info about a role in the server\n say: makes the bot say something\n server: sends info about the server\n shorten: this will shorten a url\n swatch: tells the time in internet beat time\n time: sends the current time of day and what day of the year it is\n tts: repeats your message in text to speach\n uptime: sends the current time the bot has been up and running\n user: sends info about you or another user\n videoinfo: shows you info about the youtube URL you send\n weather: sends the weather in the location you give')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        }).catch(console.error)
    } if (arg === ';help main') {
        let pages = ['Main Help Menu', 'Main Commands Descriptions']
        let page = 1;
        const mainembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';autouser\n ;calc\n ;color \n ;google\n ;help\n ;info\n ;invite\n ;join\n ;lmgtfy\n ;numbers\n ;numfact\n ;rate\n ;report\n ;roles\n ;roleinfo\n ;say\n ;server\n ;shorten\n ;swatch\n ;time\n ;tts\n ;uptime\n ;user\n ;videoinfo\n ;weather')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(mainembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let mainembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';autouser\n ;calc\n ;color \n ;google\n ;help\n ;info\n ;invite\n ;join\n ;lmgtfy\n ;numbers\n ;numfact\n ;rate\n ;report\n ;roles\n ;roleinfo\n ;say\n ;server\n ;shorten\n ;swatch\n ;time\n ;tts\n ;uptime\n ;user\n ;videoinfo\n ;weather')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(mainembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('autouser: autofills the name of a user with the letters you give\n calc: a calculator for math stuff\n color: tells you info about the hex color code you send\n google: searches for the term on google then sends the results\n help: tells you all the commands\n info: sends info about the bot\n invite: sends the invites for the bot\n join: sends the link to join the support server\n lmgtfy: produce a lmgtfy (let me google that for you) URL\n number: finds a random number between the lowest and highest numbers you give\n numfact: gives a random fact about a number or a fact about a number you gave\n rate: rate someone or something\n report: report any bugs you find with the bot\n roles: shows all role names and ids in a list that are in the server\n roleinfo: sends info about a role in the server\n say: makes the bot say something\n server: sends info about the server\n shorten: this will shorten a url\n swatch: tells the time in internet beat time\n time: sends the current time of day and what day of the year it is\n tts: repeats your message in text to speach\n uptime: sends the current time the bot has been up and running\n user: sends info about you or another user\n videoinfo: shows you info about the youtube URL you send\n weather: sends the weather in the location you give')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('autouser: autofills the name of a user with the letters you give\n calc: a calculator for math stuff\n color: tells you info about the hex color code you send\n google: searches for the term on google then sends the results\n help: tellsyou all the commands\n info: sends info about the bot\n invite: sends the invites for the bot\n join: sends the link to join the support server\n lmgtfy: produce a lmgtfy (let me google that for you) URL\n number: finds a random number between the lowest and highest numbers you give\n numfact: gives a random fact about a number or a fact about a number you gave\n rate: rate someone or something\n report: report any bugs you find with the bot\n roles: shows all role names and ids in a list that are in the server\n roleinfo: sends info about a role in the server\n say: makes the bot say something\n server: sends info about the server\n shorten: this will shorten a url\n swatch: tells the time in internet beat time\n time: sends the current time of day and what day of the year it is\n tts: repeats your message in text to speach\n uptime: sends the current time the bot has been up and running\n user: sends info about you or another user\n videoinfo: shows you info about the youtube URL you send\n weather: sends the weather in the location you give')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
//#endregion
//#region mod
    }else if (arg === ';help mod') {
        let pages = ['Moderation Help Menu', 'Moderation Commands Descriptions']
        let page = 1;
        const modembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';addrole\n ;ban\n ;clear\n ;kick\n ;mute\n ;poll\n ;removerole\n ;tempmute\n ;unmute\n ;unban')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(modembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let modembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';addrole\n ;ban\n ;clear\n ;kick\n ;mute\n ;poll\n ;removerole\n ;tempmute\n ;unmute\n ;unban')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(modembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('addrole: adds a role to a user in the server\n ban: bans a user from the server\n clear: clears up to 100 messages in a channel in the server\n kick: kicks a user from the server\n mute: mutes a user in the server\n poll: creates a voting poll\n removerole: removes a role from a user in the server\n tempmute: mutes a user in the server for a certain amount of time\n unmute: unmutes a user that is muted on the server\n unban: unbans a banned user in the server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('addrole: adds a role to a user in the server\n ban: bans a user from the server\n clear: clears up to 100 messages in a channel in the server\n kick: kicks a user from the server\n mute: mutes a user in the server\n poll: creates a voting poll\n removerole: removes a role from a user in the server\n tempmute: mutes a user in the server for a certain amount of time\n unmute: unmutes a user that is muted on the server\n unban: unbans a banned user in the server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
    } if (arg === ';help mod') {
            let pages = ['Moderation Help Menu', 'Moderation Commands Descriptions']
            let page = 1;
            const modembed = new discord.RichEmbed()
            .setColor('#FF00EC')
            .setTitle(pages[page-1])
            .setDescription(';addrole\n ;ban\n ;clear\n ;kick\n ;mute\n ;poll\n ;removerole\n ;tempmute\n ;unmute\n ;unban')
            .setFooter(`Page ${page} of ${pages.length}`)
            
            if (message.channel.type === 'text') message.channel.send(modembed).then(msg => { 
       
                msg.react('⏪').then( r => { 
                  msg.react('⏩') 
                
                  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                  const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
                 
                  const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
                  const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
    
                  backwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page--; 
                        if (page === 1){
                            let modembed = new discord.RichEmbed()
                            .setColor('#FF00EC')
                            .setDescription(';addrole\n ;ban\n ;clear\n ;kick\n ;mute\n ;poll\n ;removerole\n ;tempmute\n ;unmute\n ;unban')
                            .setFooter(`Page ${page} of ${pages.length}`) 
                            .setTitle(pages[page-1])
                            msg.edit(modembed)
                        }else if (page === 2) {
                            let infoembed = new discord.RichEmbed()
                                .setTitle(pages[page-1])
                                .setDescription('addrole: adds a role to a user in the server\n ban: bans a user from the server\n clear: clears up to 100 messages in a channel in the server\n kick: kicks a user from the server\n mute: mutes a user in the server\n poll: creates a voting poll\n removerole: removes a role from a user in the server\n tempmute: mutes a user in the server for a certain amount of time\n unmute: unmutes a user that is muted on the server\n unban: unbans a banned user in the server')
                                .setFooter(`Page ${page} of ${pages.length}`)
                                .setColor('#FF00EC')
                                msg.edit(infoembed)
                        }else if (page === 0) {
                            page = 1
                        }
                    })
                    forwards.on('collect', r => { 
                        if (page === pages.length) {}
                            page++; 
                            if (page === 2){
                                let infoembed = new discord.RichEmbed()
                                .setTitle(pages[page-1])
                                .setDescription('addrole: adds a role to a user in the server\n ban: bans a user from the server\n clear: clears up to 100 messages in a channel in the server\n kick: kicks a user from the server\n mute: mutes a user in the server\n poll: creates a voting poll\n removerole: removes a role from a user in the server\n tempmute: mutes a user in the server for a certain amount of time\n unmute: unmutes a user that is muted on the server\n unban: unbans a banned user in the server')
                                .setFooter(`Page ${page} of ${pages.length}`)
                                .setColor('#FF00EC')
                                msg.edit(infoembed)
                        }else if (page === 3) {
                            page = 2
                        }
                    })
                })
            })
//#endregion
//#region fun
    }else if (arg === ';help fun') {
        let pages = ['Fun Help Menu', 'Fun Commands Descriptions']
        let page = 1;
        const funembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';8ball\n ;achievement\n ;advice\n ;ascii\n ;bingo\n ;blocktext\n ;card\n ;clap\n ;coin\n ;cookie\n ;copypaste\n ;cowsay\n ;destroy\n ;diceroll\n ;fliptext\n ;joke\n ;kms\n ;magik\n ;mock\n ;pat\n ;punch\n ;quote\n ;retro\n ;rip\n ;rps\n ;slap\n ;space\n ;thisorthat\n ;tiny\n ;urban\n ;wouldyourather')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(funembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let funembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';8ball\n ;achievement\n ;advice\n ;ascii\n ;bingo\n ;block\n ;card\n ;clap\n ;coin\n ;cookie\n ;copypaste\n ;cowsay\n ;destroy\n ;roll\n ;fliptext\n ;joke\n ;kms\n ;magik\n ;mock\n ;pat\n ;punch\n ;quote\n ;retro\n ;rip\n ;rps\n ;slap\n ;space\n ;start\n ;thisorthat\n ;tiny\n ;wouldyourather')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(funembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('8ball: answers your question via an 8ball\n achievement: sends a mc achievement with the name and title you give it\n advice: give you good advice about life\n ascii: asciifies the given text\n bingo: sends a random space in a bingo sheet\n block: makes the text you send into emoji bubble text\n card: flips a card\n clap: puts a clap emote through all spaces in the message you send\n coin: flips a coin\n cookie: gives the mentioned user a cookie\n copypaste: will send a random copypasta\n cowsay: makes a cow say what you tell it to\n destroy: removes something you want to have removed\n roll: rolls a die and replies what it landed on\n fliptext: flips the given text\n joke: sends a random joke\n kms: this will kill you but bring you back to life\n magik: messes up yours or someone else\'s pfp\n mock: mocks the text you send\n pat: this will give the user you mentioned a pat\n punch: punches the user you mentioned\n quote: sends a random quote\n retro: sends a image with the text you send\n rip: this will rip a user that you mention\n "rps: starts game of rock paper scissors\n slap: slaps the user you mentioned\n space: spaces out the given text\n start: starts a battle\n thisorthat: sends 2 random things to chose from\n tiny: makes the given text smaller\n wouldyourather: sends a random would you rather question')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('8ball: answers your question via an 8ball\n achievement: sends a mc achievement with the name and title you give it\n advice: give you good advice about life\n ascii: asciifies the given text\n bingo: sends a random space in a bingo sheet\n block: makes the text you send into emoji bubble text\n card: flips a card\n clap: puts a clap emote through all spaces in the message you send\n coin: flips a coin\n cookie: gives the mentioned user a cookie\n copypaste: will send a random copypasta\n cowsay: makes a cow say what you tell it to\n destroy: removes something you want to have removed\n roll: rolls a die and replies what it landed on\n fliptext: flips the given text\n joke: sends a random joke\n kms: this will kill you but bring you back to life\n magik: messes up yours or someone else\'s pfp\n mock: mocks the text you send\n pat: this will give the user you mentioned a pat\n punch: punches the user you mentioned\n quote: sends a random quote\n retro: sends a image with the text you send\n rip: this will rip a user that you mention\n "rps: starts game of rock paper scissors\n slap: slaps the user you mentioned\n space: spaces out the given text\n start: starts a battle\n thisorthat: sends 2 random things to chose from\n tiny: makes the given text smaller\n wouldyourather: sends a random would you rather question')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
    } if (arg === ';help fun') {
        let pages = ['Fun Help Menu', 'Fun Commands Descriptions']
        let page = 1;
        const funembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';8ball\n ;achievement\n ;advice\n ;ascii\n ;bingo\n ;blocktext\n ;card\n ;clap\n ;coin\n ;cookie\n ;copypaste\n ;cowsay\n ;destroy\n ;diceroll\n ;fliptext\n ;joke\n ;kms\n ;magik\n ;mock\n ;pat\n ;punch\n ;quote\n ;retro\n ;rip\n ;rps\n ;slap\n ;space\n ;thisorthat\n ;tiny\n ;wouldyourather')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(funembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let funembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';8ball\n ;achievement\n ;advice\n ;ascii\n ;bingo\n ;blocktext\n ;card\n ;clap\n ;coin\n ;cookie\n ;copypaste\n ;cowsay\n ;destroy\n ;diceroll\n ;fliptext\n ;joke\n ;kms\n ;magik\n ;mock\n ;pat\n ;punch\n ;quote\n ;retro\n ;rip\n ;rps\n ;slap\n ;space\n ;thisorthat\n ;tiny\n ;wouldyourather')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(funembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('8ball: answers your question via an 8ball\n achievement: sends a mc achievement with the name and title you give it\n advice: give you good advice about life\n ascii: asciifies the given text\n bingo: sends a random space in a bingo sheet\n block: makes the text you send into emoji bubble text\n card: flips a card\n clap: puts a clap emote through all spaces in the message you send\n coin: flips a coin\n cookie: gives the mentioned user a cookie\n copypaste: will send a random copypasta\n cowsay: makes a cow say what you tell it to\n destroy: removes something you want to have removed\n roll: rolls a die and replies what it landed on\n fliptext: flips the given text\n joke: sends a random joke\n kms: this will kill you but bring you back to life\n magik: messes up yours or someone else\'s pfp\n mock: mocks the text you send\n pat: this will give the user you mentioned a pat\n punch: punches the user you mentioned\n quote: sends a random quote\n retro: sends a image with the text you send\n rip: this will rip a user that you mention\n "rps: starts game of rock paper scissors\n slap: slaps the user you mentioned\n space: spaces out the given text\n start: starts a battle\n thisorthat: sends 2 random things to chose from\n tiny: makes the given text smaller\n wouldyourather: sends a random would you rather question')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('8ball: answers your question via an 8ball\n achievement: sends a mc achievement with the name and title you give it\n advice: give you good advice about life\n ascii: asciifies the given text\n bingo: sends a random space in a bingo sheet\n block: makes the text you send into emoji bubble text\n card: flips a card\n clap: puts a clap emote through all spaces in the message you send\n coin: flips a coin\n cookie: gives the mentioned user a cookie\n copypaste: will send a random copypasta\n cowsay: makes a cow say what you tell it to\n destroy: removes something you want to have removed\n roll: rolls a die and replies what it landed on\n fliptext: flips the given text\n joke: sends a random joke\n kms: this will kill you but bring you back to life\n magik: messes up yours or someone else\'s pfp\n mock: mocks the text you send\n pat: this will give the user you mentioned a pat\n punch: punches the user you mentioned\n quote: sends a random quote\n retro: sends a image with the text you send\n rip: this will rip a user that you mention\n "rps: starts game of rock paper scissors\n slap: slaps the user you mentioned\n space: spaces out the given text\n start: starts a battle\n thisorthat: sends 2 random things to chose from\n tiny: makes the given text smaller\n wouldyourather: sends a random would you rather question')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
//#endregion
//#region economy
    }else if (arg === ';help economy') {
        let pages = ['Economy Help Menu', 'Economy Commands Descriptions']
        let page = 1;
        const ecoembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';bubble\n ;bubbles\n ;buy\n ;pay\n ;shop')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(ecoembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let ecoembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';bubble\n ;bubbles\n ;buy\n ;pay\n ;shop')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(ecoembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('bubble: pops a bubble and tells you how many bubbles you popped\n "bubbles: tells you how many bubbles you or the mentioned user has popped\n buy: lets you buy roles from the support server\n pay: lets you give the mentioned user the amount of bubbles you want to give\n shop: shows you all items in the shop for the support server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('bubble: pops a bubble and tells you how many bubbles you popped\n "bubbles: tells you how many bubbles you or the mentioned user has popped\n buy: lets you buy roles from the support server\n pay: lets you give the mentioned user the amount of bubbles you want to give\n shop: shows you all items in the shop for the support server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
    } if (arg === ';help economy') {
        let pages = ['Economy Help Menu', 'Economy Commands Descriptions']
        let page = 1;
        const ecoembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';bubble\n ;bubbles\n ;buy\n ;pay\n ;shop')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(ecoembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let ecoembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';bubble\n ;bubbles\n ;buy\n ;pay\n ;shop')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(ecoembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('bubble: pops a bubble and tells you how many bubbles you popped\n "bubbles: tells you how many bubbles you or the mentioned user has popped\n buy: lets you buy roles from the support server\n pay: lets you give the mentioned user the amount of bubbles you want to give\n shop: shows you all items in the shop for the support server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('bubble: pops a bubble and tells you how many bubbles you popped\n "bubbles: tells you how many bubbles you or the mentioned user has popped\n buy: lets you buy roles from the support server\n pay: lets you give the mentioned user the amount of bubbles you want to give\n shop: shows you all items in the shop for the support server')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
//#endregion
//#region image
    }else if (arg === ';help image') {
        let pages = ['Image Help Menu', 'Image Descriptions']
        let page = 1;
        const imageembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';brazzers\n ;bunny\n ;cat\n ;dog\n ;duck\n ;funky\n ;gif\n ;meme\n ;owl\n ;penguin\n ;photo\n ;rainbow\n ;retarded')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(imageembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let imageembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';brazzers\n ;bunny\n ;cat\n ;dog\n ;duck\n ;funky\n ;gif\n ;meme\n ;owl\n ;penguin\n ;photo\n ;rainbow\n ;retarded')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(imageembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('brazzers: add the brazzers logo on to the mentioned user pfp\n bunny: sends a random bunny image\n cat: sends a random image of a cat\n dog: sends a random dog image\n duck: sends a random duck image\n funky: adds funky kong to the top right corner of a image you send\n gif: sends a gif with the your search query\n meme: sends a random meme\n owl: sends a random owl image\n penguin: sends a random penguin image\n photo: sends a random photo\n rainbow: add a rainbow to the mentioned user pfp or the image you send\n retarded: add text to finish a comic')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('brazzers: add the brazzers logo on to the mentioned user pfp\n bunny: sends a random bunny image\n cat: sends a random image of a cat\n dog: sends a random dog image\n duck: sends a random duck image\n funky: adds funky kong to the top right corner of a image you send\n gif: sends a gif with the your search query\n meme: sends a random meme\n owl: sends a random owl image\n penguin: sends a random penguin image\n photo: sends a random photo\n rainbow: add a rainbow to the mentioned user pfp or the image you send\n retarded: add text to finish a comic')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
    } if (arg === ';help image') {
        let pages = ['Image Help Menu', 'Image Commands Descriptions']
        let page = 1;
        const imageembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';brazzers\n ;bunny\n ;cat\n ;dog\n ;duck\n ;funky\n ;dog\n ;meme\n ;owl\n ;penguin\n ;photo\n ;rainbow\n ;retarded')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(imageembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let imageembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';brazzers\n ;bunny\n ;cat\n ;dog\n ;duck\n ;funky\n ;dog\n ;meme\n ;owl\n ;penguin\n ;photo\n ;rainbow\n ;retarded')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(imageembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('brazzers: add the brazzers logo on to the mentioned user pfp\n bunny: sends a random bunny image\n cat: sends a random image of a cat\n dog: sends a random dog image\n duck: sends a random duck image\n funky: adds funky kong to the top right corner of a image you send\n gif: sends a gif with the your search query\n meme: sends a random meme\n owl: sends a random owl image\n penguin: sends a random penguin image\n photo: sends a random photo\n rainbow: add a rainbow to the mentioned user pfp or the image you send\n retarded: add text to finish a comic')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('brazzers: add the brazzers logo on to the mentioned user pfp\n bunny: sends a random bunny image\n cat: sends a random image of a cat\n dog: sends a random dog image\n duck: sends a random duck image\n funky: adds funky kong to the top right corner of a image you send\n gif: sends a gif with the your search query\n meme: sends a random meme\n owl: sends a random owl image\n penguin: sends a random penguin image\n photo: sends a random photo\n rainbow: add a rainbow to the mentioned user pfp or the image you send\n retarded: add text to finish a comic')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
//#endregion
//#region music
    }else if (arg === ';help music') {
        let pages = ['Music Help Menu', 'Music Commands Descriptions']
        let page = 1;
        const musicembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';pause\n ;play\n ;queue\n ;resume\n ;search\n ;stop\n ;summon\n ;voteskip')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(musicembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let musicembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';pause\n ;play\n ;queue\n ;resume\n ;search\n ;stop\n ;summon\n ;voteskip')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(musicembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('pause: pauses the current song that is playing\n play: plays the song you want with the youtube link or search query that you send\n queue: shows the songs that are in the queue\n resume: resumes the paused song\n search: looks up 10 videos on youtube with your search query\n stop: stops all music that is playing and makes the bot leave the voice channel\n summon: causes the bot to join the voice channel you are currently in\n voteskip: skips the current song that is playing when half of the people in the voice channel vote to skip the song')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('pause: pauses the current song that is playing\n play: plays the song you want with the youtube link or search query that you send\n queue: shows the songs that are in the queue\n resume: resumes the paused song\n search: looks up 10 videos on youtube with your search query\n stop: stops all music that is playing and makes the bot leave the voice channel\n summon: causes the bot to join the voice channel you are currently in\n voteskip: skips the current song that is playing when half of the people in the voice channel vote to skip the song')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
    } if (arg === ';help music') {
        let pages = ['Music Help Menu', 'Music Commands Descriptions']
        let page = 1;
        const musicembed = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';pause\n ;play\n ;queue\n ;resume\n ;search\n ;stop\n ;summon\n ;voteskip')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(musicembed).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

              backwards.on('collect', r => { 
                if (page === pages.length) {}
                    page--; 
                    if (page === 1){
                        let musicembed = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setDescription(';pause\n ;play\n ;queue\n ;resume\n ;search\n ;stop\n ;summon\n ;voteskip')
                        .setFooter(`Page ${page} of ${pages.length}`) 
                        .setTitle(pages[page-1])
                        msg.edit(musicembed)
                    }else if (page === 2) {
                        let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('pause: pauses the current song that is playing\n play: plays the song you want with the youtube link or search query that you send\n queue: shows the songs that are in the queue\n resume: resumes the paused song\n search: looks up 10 videos on youtube with your search query\n stop: stops all music that is playing and makes the bot leave the voice channel\n summon: causes the bot to join the voice channel you are currently in\n voteskip: skips the current song that is playing when half of the people in the voice channel vote to skip the song')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 0) {
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length) {}
                        page++; 
                        if (page === 2){
                            let infoembed = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription('pause: pauses the current song that is playing\n play: plays the song you want with the youtube link or search query that you send\n queue: shows the songs that are in the queue\n resume: resumes the paused song\n search: looks up 10 videos on youtube with your search query\n stop: stops all music that is playing and makes the bot leave the voice channel\n summon: causes the bot to join the voice channel you are currently in\n voteskip: skips the current song that is playing when half of the people in the voice channel vote to skip the song')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(infoembed)
                    }else if (page === 3) {
                        page = 2
                    }
                })
            })
        })
//#endregion
//#region songs
    }else if (arg === ';help songs') {
        let pages = ['Song list 1', 'Song list 2', 'Song list 3']
        let page = 1;
        const songembed1 = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';alien\n ;alive\n ;bad\n ;bellyache\n ;bored\n ;break\n ;broken\n ;broken2\n ;burn\n ;copycat\n ;crown\n ;damn\n ;dirty\n ;ending\n ;enemies\n ;entropy\n ;fakelove\n ;fireflies\n ;friends\n ;friendship')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'dm') message.author.send(songembed1).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
              backwards.on('collect', r => { 
                if (page === pages.length){}
                    page--; 
                    if (page === 1){
                        let songembed1 = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setTitle(pages[page-1])
                        .setDescription(';alien\n ;alive\n ;bad\n ;bellyache\n ;bored\n ;break\n ;broken\n ;broken2\n ;burn\n ;copycat\n ;crown\n ;damn\n ;dirty\n ;ending\n ;enemies\n ;entropy\n ;fakelove\n ;fireflies\n ;friends\n ;friendship')
                        .setFooter(`Page ${page} of ${pages.length}`)
                        msg.edit(songembed1)
                    }else if (page === 2) {
                        let songembed2 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';god\n ;happysong\n ;hostage\n ;idwbya\n ;japanese\n ;lovely\n ;lush\n ;middle\n ;motto\n ;my\n ;myboy\n ;nights\n ;ocean\n ;off\n ;og\n ;panic\n ;pumpedup\n ;ripsong\n ;rocksong\n ;sadsong')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed2)
                    }else if (page === 3){
                        let songembed3 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';side\n ;six\n ;ski\n ;smoothie\n ;snow\n ;something\n ;starting\n ;story\n ;summertime\n ;sun\n ;sunshine\n ;surf\n ;team\n ;tennis\n ;trials\n ;warpstar\n ;why')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed3)
                    }else if (page === 0){
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length){}
                        page++; 
                        if (page === 2){
                            let songembed2 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';god\n ;happysong\n ;hostage\n ;idwbya\n ;japanese\n ;lovely\n ;lush\n ;middle\n ;motto\n ;my\n ;myboy\n ;nights\n ;ocean\n ;off\n ;og\n ;panic\n ;pumpedup\n ;ripsong\n ;rocksong\n ;sadsong')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed2)
                    }else if (page === 3){
                        let songembed3 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';side\n ;six\n ;ski\n ;smoothie\n ;snow\n ;something\n ;starting\n ;story\n ;summertime\n ;sun\n ;sunshine\n ;surf\n ;team\n ;tennis\n ;trials\n ;warpstar\n ;why')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed3)
                    }else if (page === 4){
                        page = 3
                    }
                })
            })
        })
    } if (arg === ';help songs') {
        let pages = ['Song list 1', 'Song list 2', 'Song list 3']
        let page = 1;
        const songembed1 = new discord.RichEmbed()
        .setColor('#FF00EC')
        .setTitle(pages[page-1])
        .setDescription(';alien\n ;alive\n ;bad\n ;bellyache\n ;bored\n ;break\n ;broken\n ;broken2\n ;burn\n ;copycat\n ;crown\n ;damn\n ;dirty\n ;ending\n ;enemies\n ;entropy\n ;fakelove\n ;fireflies\n ;friends\n ;friendship')
        .setFooter(`Page ${page} of ${pages.length}`)
        
        if (message.channel.type === 'text') message.channel.send(songembed1).then(msg => { 
   
            msg.react('⏪').then( r => { 
              msg.react('⏩') 
            
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
             
              const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
              const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
              backwards.on('collect', r => { 
                if (page === pages.length){}
                    page--; 
                    if (page === 1){
                        let songembed1 = new discord.RichEmbed()
                        .setColor('#FF00EC')
                        .setTitle(pages[page-1])
                        .setDescription(';alien\n ;alive\n ;bad\n ;bellyache\n ;bored\n ;break\n ;broken\n ;broken2\n ;burn\n ;copycat\n ;crown\n ;damn\n ;dirty\n ;ending\n ;enemies\n ;entropy\n ;fakelove\n ;fireflies\n ;friends\n ;friendship')
                        .setFooter(`Page ${page} of ${pages.length}`)
                        msg.edit(songembed1)
                    }else if (page === 2) {
                        let songembed2 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';god\n ;happysong\n ;hostage\n ;idwbya\n ;japanese\n ;lovely\n ;lush\n ;middle\n ;motto\n ;my\n ;myboy\n ;nights\n ;ocean\n ;off\n ;og\n ;panic\n ;pumpedup\n ;ripsong\n ;rocksong\n ;sadsong')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed2)
                    }else if (page === 3){
                        let songembed3 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';side\n ;six\n ;ski\n ;smoothie\n ;snow\n ;something\n ;starting\n ;story\n ;summertime\n ;sun\n ;sunshine\n ;surf\n ;team\n ;tennis\n ;trials\n ;warpstar\n ;why')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed3)
                    }else if (page === 0){
                        page = 1
                    }
                })
                forwards.on('collect', r => { 
                    if (page === pages.length){}
                        page++; 
                        if (page === 2){
                            let songembed2 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';god\n ;happysong\n ;hostage\n ;idwbya\n ;japanese\n ;lovely\n ;lush\n ;middle\n ;motto\n ;my\n ;myboy\n ;nights\n ;ocean\n ;off\n ;og\n ;panic\n ;pumpedup\n ;ripsong\n ;rocksong\n ;sadsong')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed2)
                    }else if (page === 3){
                        let songembed3 = new discord.RichEmbed()
                            .setTitle(pages[page-1])
                            .setDescription(';side\n ;six\n ;ski\n ;smoothie\n ;snow\n ;something\n ;starting\n ;story\n ;summertime\n ;sun\n ;sunshine\n ;surf\n ;team\n ;tennis\n ;trials\n ;warpstar\n ;why')
                            .setFooter(`Page ${page} of ${pages.length}`)
                            .setColor('#FF00EC')
                            msg.edit(songembed3)
                    }else if (page === 4){
                        page = 3
                    }
                })
            })
        })
    }
//})
}
//#endregion
exports.config = {
    aliases: [ ]
}

exports.help = {
    name: 'help'
}
