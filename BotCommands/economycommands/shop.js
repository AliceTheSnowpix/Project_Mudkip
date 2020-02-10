exports.run = async(bot, message, args) => {
  const Discord = bot.discord;
  const db = bot.db;
  const prefixes = new db.table('PREFIXES');

  //Name Tables
  const Name1 = new db.table('NAME1');
  const Name2 = new db.table('NAME2');
  const Name3 = new db.table('NAME3');
  const Name4 = new db.table('NAME4');
  const Name5 = new db.table('NAME5');
  const Name6 = new db.table('NAME6');
  const Name7 = new db.table('NAME7');
  const Name8 = new db.table('NAME8');
  const Name9 = new db.table('NAME9');
  const Name10 = new db.table('NAME10');
  // Cost Tables
  const Cost1 = new db.table('COST1');
  const Cost2 = new db.table('COST2');
  const Cost3 = new db.table('COST3');
  const Cost4 = new db.table('COST4');
  const Cost5 = new db.table('COST5');
  const Cost6 = new db.table('COST6');
  const Cost7 = new db.table('COST7');
  const Cost8 = new db.table('COST8');
  const Cost9 = new db.table('COST9');
  const Cost10 = new db.table('COST10');
  // Items Tables
  const Item1 = new db.table('ITEM1');
  const Item2 = new db.table('ITEM2');
  const Item3 = new db.table('ITEM3');
  const Item4 = new db.table('ITEM4');
  const Item5 = new db.table('ITEM5');
  const Item6 = new db.table('ITEM6');
  const Item7 = new db.table('ITEM7');
  const Item8 = new db.table('ITEM8');
  const Item9 = new db.table('ITEM9');
  const Item10 = new db.table('ITEM10');

  let serverID = (456629010890227714)
  if (message.guild.id != serverID) {
    let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
      prefixes.set(`prefix_${message.guild.id}`, ';');
      prefix = ';';
    }
    
    let arg = String(message.content.toLowerCase());
    let cmd = String(message.content.slice(prefix.length).toLowerCase().split(' ').slice(1, 2).join(' ').toLowerCase());
    if (!cmd || arg === '<@460159835544092674> shop') {
      //Fetch the Shop item stuff
      //Shop Item Names
      let n1 = await Name1.fetch(`name1_${message.guild.id}`);
      let n2 = await Name2.fetch(`name2_${message.guild.id}`);
      let n3 = await Name3.fetch(`name3_${message.guild.id}`);
      let n4 = await Name4.fetch(`name4_${message.guild.id}`);
      let n5 = await Name5.fetch(`name5_${message.guild.id}`);
      let n6 = await Name6.fetch(`name6_${message.guild.id}`);
      let n7 = await Name7.fetch(`name7_${message.guild.id}`);
      let n8 = await Name8.fetch(`name8_${message.guild.id}`);
      let n9 = await Name9.fetch(`name9_${message.guild.id}`);
      let n10 = await Name10.fetch(`name10_${message.guild.id}`);
      //Shop Item Cost
      let c1 = await Cost1.fetch(`cost1_${message.guild.id}`);
      let c2 = await Cost2.fetch(`cost2_${message.guild.id}`);
      let c3 = await Cost3.fetch(`cost3_${message.guild.id}`);
      let c4 = await Cost4.fetch(`cost4_${message.guild.id}`);
      let c5 = await Cost5.fetch(`cost5_${message.guild.id}`);
      let c6 = await Cost6.fetch(`cost6_${message.guild.id}`);
      let c7 = await Cost7.fetch(`cost7_${message.guild.id}`);
      let c8 = await Cost8.fetch(`cost8_${message.guild.id}`);
      let c9 = await Cost9.fetch(`cost9_${message.guild.id}`);
      let c10 = await Cost10.fetch(`cost10_${message.guild.id}`);
      //Shop Item
      let i1 = await Item1.fetch(`item1_${message.guild.id}`);
      let i2 = await Item2.fetch(`item2_${message.guild.id}`);
      let i3 = await Item3.fetch(`item3_${message.guild.id}`);
      let i4 = await Item4.fetch(`item4_${message.guild.id}`);
      let i5 = await Item5.fetch(`item5_${message.guild.id}`);
      let i6 = await Item6.fetch(`item6_${message.guild.id}`);
      let i7 = await Item7.fetch(`item7_${message.guild.id}`);
      let i8 = await Item8.fetch(`item8_${message.guild.id}`);
      let i9 = await Item9.fetch(`item9_${message.guild.id}`);
      let i10 = await Item10.fetch(`item10_${message.guild.id}`);
      
      let shopEmbed = new Discord.RichEmbed()
      .setTitle(`**${message.guild.name}** Server Shop`)
      .setColor('RANDOM')
      .setDescription('To buy an item use the command ;buy <shop item name>')
      if (n1 === 'not set' && c1 === 'not set' && i1 === 'not set' 
          && n2 === 'not set' && c2 === 'not set' && i2 === 'not set' 
          && n3 === 'not set' && c3 === 'not set' && i3 === 'not set' 
          && n4 === 'not set' && c4 === 'not set' && i4 === 'not set' 
          && n5 === 'not set' && c5 === 'not set' && i5 === 'not set' 
          && n6 === 'not set' && c6 === 'not set' && i6 === 'not set' 
          && n7 === 'not set' && c7 === 'not set' && i7 === 'not set' 
          && n8 === 'not set' && c8 === 'not set' && i8 === 'not set' 
          && n9 === 'not set' && c9 === 'not set' && i9 === 'not set' 
          && n10 === 'not set' && c10 === 'not set' && i10 === 'not set') {
            return message.channel.send('There is currently no items on the shop');
          }
      
      if (n1 === null && c1 === null && i1 === null 
          && n2 === null && c2 === null && i2 === null 
          && n3 === null && c3 === null && i3 === null 
          && n4 === null && c4 === null && i4 === null 
          && n5 === null && c5 === null && i5 === null 
          && n6 === null && c6 === null && i6 === null 
          && n7 === null && c7 === null && i7 === null 
          && n8 === null && c8 === null && i8 === null 
          && n9 === null && c9 === null && i9 === null 
          && n10 === null && c10 === null && i10 === null) {
            return message.channel.send('There is currently no items on the shop');
          }
      
      if (n1 === 'not set' || n1 === null || c1 === 'not set' || c1 === null || i1 === 'not set' || i1 === null) shopEmbed;
      else if (message.guild.roles.get(i1)) shopEmbed.addField(`${n1}`, `<@&${i1}>, you need to pop and pay ${c1} bubbles to buy this item.`);
      else if (message.guild.channels.get(i1)) shopEmbed.addField(`${n1}`, `<#${i1}>, you need to pop and pay ${c1} bubbles to buy this item.`);
      else shopEmbed.addField(`${n1}`, `${i1}, you need to pop and pay ${c1} bubbles to buy this item.`);
      
      if (n2 === 'not set' || n2 === null || c2 === 'not set' || c2 === null || i2 === 'not set' || i2 === null) shopEmbed;
      else if (message.guild.roles.get(i2)) shopEmbed.addField(`${n2}`, `<@&${i2}>, you need to pop and pay ${c2} bubbles to buy this item.`);
      else if (message.guild.channels.get(i2)) shopEmbed.addField(`${n2}`, `<#${i2}>, you need to pop and pay ${c2} bubbles to buy this item.`);
      else shopEmbed.addField(`${n2}`, `${i2}, you need to pop and pay ${c2} bubbles to buy this item.`);
      
      if (n3 === 'not set' || n3 === null || c3 === 'not set' || c3 === null || i3 === 'not set' || i3 === null) shopEmbed;
      else if (message.guild.roles.get(i3)) shopEmbed.addField(`${n3}`, `<@&${i3}>, you need to pop and pay ${c3} bubbles to buy this item.`);
      else if (message.guild.channels.get(i3)) shopEmbed.addField(`${n3}`, `<#${i3}>, you need to pop and pay ${c3} bubbles to buy this item.`);
      else shopEmbed.addField(`${n3}`, `${i3}, you need to pop and pay ${c3} bubbles to buy this item.`);
      
      if (n4 === 'not set' || n4 === null || c4 === 'not set' || c4 === null || i4 === 'not set' || i4 === null) shopEmbed;
      else if (message.guild.roles.get(i4)) shopEmbed.addField(`${n4}`, `<@&${i4}>, you need to pop and pay ${c4} bubbles to buy this item.`);
      else if (message.guild.channels.get(i4)) shopEmbed.addField(`${n4}`, `<#${i4}>, you need to pop and pay ${c4} bubbles to buy this item.`);
      else shopEmbed.addField(`${n4}`, `${i4}, you need to pop and pay ${c4} bubbles to buy this item.`);

      if (n5 === 'not set' || n5 === null || c5 === 'not set' || c5 === null || i5 === 'not set' || i5 === null) shopEmbed;
      else if (message.guild.roles.get(i5)) shopEmbed.addField(`${n5}`, `<@&${i5}>, you need to pop and pay ${c5} bubbles to buy this item.`);
      else if (message.guild.channels.get(i5)) shopEmbed.addField(`${n5}`, `<#${i5}>, you need to pop and pay ${c5} bubbles to buy this item.`);
      else shopEmbed.addField(`${n5}`, `${i5}, you need to pop and pay ${c5} bubbles to buy this item.`);

      if (n6 === 'not set' || n6 === null || c6 === 'not set' || c6 === null || i6 === 'not set' || i6 === null) shopEmbed;
      else if (message.guild.roles.get(i6)) shopEmbed.addField(`${n6}`, `<@&${i6}>, you need to pop and pay ${c6} bubbles to buy this item.`);
      else if (message.guild.channels.get(i6)) shopEmbed.addField(`${n6}`, `<#${i6}>, you need to pop and pay ${c6} bubbles to buy this item.`);
      else shopEmbed.addField(`${n6}`, `${i6}, you need to pop and pay ${c6} bubbles to buy this item.`);

      if (n7 === 'not set' || n7 === null || c7 === 'not set' || c7 === null || i7 === 'not set' || i7 === null) shopEmbed;
      else if (message.guild.roles.get(i7)) shopEmbed.addField(`${n7}`, `<@&${i7}>, you need to pop and pay ${c7} bubbles to buy this item.`);
      else if (message.guild.channels.get(i7)) shopEmbed.addField(`${n7}`, `<#${i7}>, you need to pop and pay ${c7} bubbles to buy this item.`);
      else shopEmbed.addField(`${n7}`, `${i7}, you need to pop and pay ${c7} bubbles to buy this item.`);

      if (n8 === 'not set' || n8 === null || c8 === 'not set' || c8 === null || i8 === 'not set' || i8 === null) shopEmbed;
      else if (message.guild.roles.get(i8)) shopEmbed.addField(`${n8}`, `<@&${i8}>, you need to pop and pay ${c8} bubbles to buy this item.`);
      else if (message.guild.channels.get(i8)) shopEmbed.addField(`${n8}`, `<#${i8}>, you need to pop and pay ${c8} bubbles to buy this item.`);
      else shopEmbed.addField(`${n8}`, `${i8}, you need to pop and pay ${c8} bubbles to buy this item.`);

      if (n9 === 'not set' || n9 === null || c9 === 'not set' || c9 === null || i9 === 'not set' || i9 === null) shopEmbed;
      else if (message.guild.roles.get(i9)) shopEmbed.addField(`${n9}`, `<@&${i9}>, you need to pop and pay ${c9} bubbles to buy this item.`);
      else if (message.guild.channels.get(i9)) shopEmbed.addField(`${n9}`, `<#${i9}>, you need to pop and pay ${c9} bubbles to buy this item.`);
      else shopEmbed.addField(`${n9}`, `${i9}, you need to pop and pay ${c9} bubbles to buy this item.`);

      if (n10 === 'not set' || n10 === null || c10 === 'not set' || c10 === null || i10 === 'not set' || i10 === null) shopEmbed;
      else if (message.guild.roles.get(i10)) shopEmbed.addField(`${n10}`, `<@&${i10}>, you need to pop and pay ${c10} bubbles to buy this item.`);
      else if (message.guild.channels.get(i10)) shopEmbed.addField(`${n10}`, `<#${i10}>, you need to pop and pay ${c10} bubbles to buy this item.`);
      else shopEmbed.addField(`${n10}`, `${i10}, you need to pop and pay ${c10} bubbles to buy this item.`);
      return message.channel.send(shopEmbed)
    }
    
    if (cmd === 'add' || arg === '<@460159835544092674> shop add') {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sorry you cant do this right now. Try again when you have the administrator permission')
      //Fetch the Shop item stuff
      //Shop Item Names
      let n1 = await Name1.fetch(`name1_${message.guild.id}`);
      let n2 = await Name2.fetch(`name2_${message.guild.id}`);
      let n3 = await Name3.fetch(`name3_${message.guild.id}`);
      let n4 = await Name4.fetch(`name4_${message.guild.id}`);
      let n5 = await Name5.fetch(`name5_${message.guild.id}`);
      let n6 = await Name6.fetch(`name6_${message.guild.id}`);
      let n7 = await Name7.fetch(`name7_${message.guild.id}`);
      let n8 = await Name8.fetch(`name8_${message.guild.id}`);
      let n9 = await Name9.fetch(`name9_${message.guild.id}`);
      let n10 = await Name10.fetch(`name10_${message.guild.id}`);
      //Shop Item Cost
      let c1 = await Cost1.fetch(`cost1_${message.guild.id}`);
      let c2 = await Cost2.fetch(`cost2_${message.guild.id}`);
      let c3 = await Cost3.fetch(`cost3_${message.guild.id}`);
      let c4 = await Cost4.fetch(`cost4_${message.guild.id}`);
      let c5 = await Cost5.fetch(`cost5_${message.guild.id}`);
      let c6 = await Cost6.fetch(`cost6_${message.guild.id}`);
      let c7 = await Cost7.fetch(`cost7_${message.guild.id}`);
      let c8 = await Cost8.fetch(`cost8_${message.guild.id}`);
      let c9 = await Cost9.fetch(`cost9_${message.guild.id}`);
      let c10 = await Cost10.fetch(`cost10_${message.guild.id}`);
      //Shop Item
      let i1 = await Item1.fetch(`item1_${message.guild.id}`);
      let i2 = await Item2.fetch(`item2_${message.guild.id}`);
      let i3 = await Item3.fetch(`item3_${message.guild.id}`);
      let i4 = await Item4.fetch(`item4_${message.guild.id}`);
      let i5 = await Item5.fetch(`item5_${message.guild.id}`);
      let i6 = await Item6.fetch(`item6_${message.guild.id}`);
      let i7 = await Item7.fetch(`item7_${message.guild.id}`);
      let i8 = await Item8.fetch(`item8_${message.guild.id}`);
      let i9 = await Item9.fetch(`item9_${message.guild.id}`);
      let i10 = await Item10.fetch(`item10_${message.guild.id}`);
      
      if (n1 === 'not set' || n1 === null || c1 === 'not set' || c1 === null || i1 === 'not set' || i1 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name1.set(`name1_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost1.set(`cost1_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost1.set(`cost1_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken');
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item1.set(`item1_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first()} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item1.set(`item1_${message.guild.id}`, 'not set')
                  message.channel.send('To set the item please try again.')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item1.set(`item1_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item1.set(`item1_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item1.set(`item1_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item1.set(`item1_${message.guild.id}`, 'not set');
                  message.channel.send('To set the Item please try again');
                }
              }
            });
            if (response.first().content.toLowerCase() !== 'yes') {
              Cost1.set(`cost1_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name1.set(`name1_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n2 === 'not set' || n2 === null || c2 === 'not set' || c2 === null ||  i2 === 'not set' || i2 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name2.set(`name2_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost2.set(`cost2_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost2.set(`cost2_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item2.set(`item2_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item2.set(`item2_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item1.set(`item1_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item1.set(`item1_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item2.set(`item2_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item2.set(`item2_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost2.set(`cost2_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name2.set(`name2_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n3 === 'not set' || n3 === null || c3 === 'not set' || c3 === null ||  i3 === 'not set' || i3 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name3.set(`name3_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost3.set(`cost3_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost3.set(`cost3_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item3.set(`item3_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item3.set(`item3_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item3.set(`item3_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item3.set(`item3_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item3.set(`item3_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item3.set(`item3_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost3.set(`cost3_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name3.set(`name3_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n4 === 'not set' || n4 === null || c4 === 'not set' || c4 === null ||  i4 === 'not set' || i4 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name4.set(`name4_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost4.set(`cost4_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost4.set(`cost4_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item4.set(`item4_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item4.set(`item4_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item4.set(`item4_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item4.set(`item4_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item4.set(`item4_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item4.set(`item4_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost4.set(`cost4_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name4.set(`name4_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n5 === 'not set' || n5 === null || c5 === 'not set' || c5 === null || i5 === 'not set' || i5 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name5.set(`name5_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost5.set(`cost5_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost5.set(`cost5_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')

              if (!findRole && !response.first().content.startsWith('<#')) {
                Item5.set(`item5_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item5.set(`item5_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item5.set(`item5_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item5.set(`item5_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item5.set(`item5_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item5.set(`item5_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost5.set(`cost5_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name5.set(`name5_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n6 === 'not set' || n6 === null || c6 === 'not set' || c6 === null ||  i6 === 'not set' || i6 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name6.set(`name6_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost6.set(`cost6_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost6.set(`cost6_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item6.set(`item6_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item6.set(`item6_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item6.set(`item6_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item6.set(`item6_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item6.set(`item6_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item6.set(`item6_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost6.set(`cost6_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name6.set(`name6_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n7 === 'not set' || n7 === null || c7 === 'not set' || c7 === null ||  i7 === 'not set' || i7 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name7.set(`name7_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost7.set(`cost7_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost7.set(`cost7_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item7.set(`item7_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item7.set(`item7_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item7.set(`item7_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item7.set(`item7_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item7.set(`item7_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item7.set(`item7_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost7.set(`cost7_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name7.set(`name7_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n8 === 'not set' || n8 === null || c8 === 'not set' || c8 === null ||  i8 === 'not set' || i8 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name8.set(`name8_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost8.set(`cost8_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost8.set(`cost8_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item8.set(`item8_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item8.set(`item8_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item8.set(`item8_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item8.set(`item8_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item8.set(`item8_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item8.set(`item8_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost8.set(`cost8_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name8.set(`name8_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n9 === 'not set' || n9 === null || c9 === 'not set' || c9 === null ||  i9 === 'not set' || i9 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name9.set(`name9_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost9.set(`cost9_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost9.set(`cost9_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item9.set(`item9_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item9.set(`item9_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item9.set(`item9_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item9.set(`item9_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item9.set(`item9_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item9.set(`item9_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost9.set(`cost9_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name9.set(`name9_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n10 === 'not set' || n10 === null || c10 === 'not set' || c10 === null ||  i10 === 'not set' || i10 === null) {
        message.channel.send('What do you want name of Shop Item to be?');
        let response;
        try {
          response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        message.channel.send(`Are you sure you want ${response.first()} to be the name of the shop item?`);
        Name10.set(`name10_${message.guild.id}`, response.first().content);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The name of the shop item is now ${response.first()}`).then(async a => {
          message.channel.send('What do you want the price to be for the Shop Item?')
          let response;
          try {
            response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
              max: 1,
              time: 20000,
              errors: ['time']
            });
          } catch (err) {
            message.channel.send('You did not send a vaild response or you did not respond in time.')
          }
          if (isNaN(response.first().content)) {
            Cost10.set(`cost10_${message.guild.id}`, 'not set');
            return message.channel.send('the Cost must be a number');
          } else {
            Cost10.set(`cost10_${message.guild.id}`, response.first().content);
            message.channel.send(`Are you sure you want the cost to be ${response.first()} bubbles`);
            let response2;
            try {
              response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                max: 1,
                time: 20000,
                errors: ['time']
              });
            } catch (err) {
              message.channel.send('You did not send a vaild response or you did not respond in time.')
            }
            if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`The cost for the item is now ${response.first()} bubbles`).then(async a => {
              message.channel.send('What do you want the item to be, It can give a role, unlock a channel or give a useless item.');
              let response;
              try {
                response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                });
              } catch (err) {
                message.channel.send('You did not send a vaild response or you did not respond in time.');
              }
              let role = response.first().content;
              let findRole = message.guild.roles.find(a => a.name === role);
              let botRole = message.guild.roles.find(b => b.name === 'project_chicken')
              
              if (!findRole && !response.first().content.startsWith('<#')) {
                Item10.set(`item10_${message.guild.id}`, response.first().content)
                message.channel.send(`Are you sure you want ${response.first().content} to be the item`)
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase === 'yes') return message.channel.send(`People will now get ${response.first().content} when they buy this item`)
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item10.set(`item10_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              } else if (response.first().content.startsWith('<#')) {
                let c = response.first().content.slice(2, -1);
                let channel = message.guild.channels.find(a => a.id === c)
                if (channel) {
                  Item10.set(`item10_${message.guild.id}`, channel.id);
                  message.channel.send(`Are you sure you want <#${channel.id}> to be the item`)
                  let response2;
                  try {
                    response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                      max: 1,
                      time: 20000,
                      errors: ['time']
                    });
                  } catch (err) {
                    message.channel.send('You did not send a vaild response or you did not respond in time.')
                  }
                  if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get access to the <#${channel.id}> channel when they buy this item`);
                  if (response2.first().content.toLowerCase() !== 'yes') {
                    Item10.set(`item10_${message.guild.id}`, 'not set')
                    message.channel.send('To set the item please try again.')
                  }
                }
              } else if (findRole.position > message.guild.member(bot.user).highestRole && !message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`To make me add the <@&${findRole.id}> role when someone buys this item, please make sure I have a role above <@&${findRole.id}> and I have the manage roles permission.`)
              else if (findRole) {
                Item10.set(`item10_${message.guild.id}`, findRole.id);
                message.channel.send(`Are you sure you want the <@&${findRole.id}> role to be the Item`);
                let response2;
                try {
                  response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  });
                } catch (err) {
                  message.channel.send('You did not send a vaild response or you did not respond in time.')
                }
                if (response2.first().content.toLowerCase() === 'yes') return message.channel.send(`People will now get the <@&${findRole.id}> role when they buy this item`);
                if (response2.first().content.toLowerCase() !== 'yes') {
                  Item10.set(`item10_${message.guild.id}`, 'not set')
                  message.channel.send('To set the Item please try again')
                }
              }
            });
            if (response.first().content.toLowerCase !== 'yes') {
              Cost10.set(`cost10_${message.guild.id}`, 'not set');
              message.channel.send('To set the Cost of the Item please try again')
            }
          }
        });
        if (response2.first().content.toLowerCase() !== 'yes') {
          Name10.set(`name10_${message.guild.id}`, 'not set')
          message.channel.send('To set the Shop Item Name please try again')
        }
      } else if (n10 !== 'not set' || n10 !== null || c10 !== 'not set' || c10 !== null || i10 !== 'not set' || i10 !== null) return message.channel.send('You can only add 10 items to the shop at a time')
    }
    
    if (cmd === 'remove' || arg === '<@460159835544092674> shop remove') {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sorry you cant do this right now. Try again when you have the administrator permission');
      //Fetch the Shop item stuff
      //Shop Item Names
      let n1 = await Name1.fetch(`name1_${message.guild.id}`);
      let n2 = await Name2.fetch(`name2_${message.guild.id}`);
      let n3 = await Name3.fetch(`name3_${message.guild.id}`);
      let n4 = await Name4.fetch(`name4_${message.guild.id}`);
      let n5 = await Name5.fetch(`name5_${message.guild.id}`);
      let n6 = await Name6.fetch(`name6_${message.guild.id}`);
      let n7 = await Name7.fetch(`name7_${message.guild.id}`);
      let n8 = await Name8.fetch(`name8_${message.guild.id}`);
      let n9 = await Name9.fetch(`name9_${message.guild.id}`);
      let n10 = await Name10.fetch(`name10_${message.guild.id}`);
      
      message.channel.send('Please send the name of a the shop item you want to remove');
      let response;
      try {
        response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
          max: 1,
          time: 20000,
          errors: ['time']
        });
      } catch (err) {
        message.channel.send('You did not send a vaild response or you did not respond in time.');
      }
      
      if (response.first().content.toLowerCase() === n1) {
        message.channel.send(`Are you sure you want to remove ${n1}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.');
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n1} has been removed from the shop.`);
          Name1.set(`name1_${message.guild.id}`, 'not set');
          Cost1.set(`cost1_${message.guild.id}`, 'not set');
          Item1.set(`item1_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n1} will not be removed from the shop.`)
      } else return message.channel.send('I could not find that shop item please make sure you typed it corectly.');
      if (response.first().content.toLowerCase() === n2) {
        message.channel.send(`Are you sure you want to remove ${n2}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n2} has been removed from the shop.`);
          Name2.set(`name2_${message.guild.id}`, 'not set');
          Cost2.set(`cost2_${message.guild.id}`, 'not set');
          Item2.set(`item2_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n2} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n3) {
        message.channel.send(`Are you sure you want to remove ${n3}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n3} has been removed from the shop.`);
          Name3.set(`name3_${message.guild.id}`, 'not set');
          Cost3.set(`cost3_${message.guild.id}`, 'not set');
          Item3.set(`item3_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n3} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n4) {
        message.channel.send(`Are you sure you want to remove ${n4}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n4} has been removed from the shop.`);
          Name4.set(`name4_${message.guild.id}`, 'not set');
          Cost4.set(`cost4_${message.guild.id}`, 'not set');
          Item4.set(`item4_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n4} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n5) {
        message.channel.send(`Are you sure you want to remove ${n5}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n5} has been removed from the shop.`);
          Name5.set(`name5_${message.guild.id}`, 'not set');
          Cost5.set(`cost5_${message.guild.id}`, 'not set');
          Item5.set(`item5_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n5} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n6) {
        message.channel.send(`Are you sure you want to remove ${n6}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n6} has been removed from the shop.`);
          Name6.set(`name6_${message.guild.id}`, 'not set');
          Cost6.set(`cost6_${message.guild.id}`, 'not set');
          Item6.set(`item6_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n6} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n7) {
        message.channel.send(`Are you sure you want to remove ${n7}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n7} has been removed from the shop.`);
          Name7.set(`name7_${message.guild.id}`, 'not set');
          Cost7.set(`cost7_${message.guild.id}`, 'not set');
          Item7.set(`item7_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n7} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n8) {
        message.channel.send(`Are you sure you want to remove ${n8}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n8} has been removed from the shop.`);
          Name8.set(`name8_${message.guild.id}`, 'not set');
          Cost8.set(`cost8_${message.guild.id}`, 'not set');
          Item8.set(`item8_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n8} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n9) {
        message.channel.send(`Are you sure you want to remove ${n9}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n9} has been removed from the shop.`);
          Name9.set(`name9_${message.guild.id}`, 'not set');
          Cost9.set(`cost9_${message.guild.id}`, 'not set');
          Item9.set(`item9_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n9} will not be removed from the shop.`)
      }
      if (response.first().content.toLowerCase() === n10) {
        message.channel.send(`Are you sure you want to remove ${n10}?`);
        let response2;
        try {
          response2 = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
            max: 1,
            time: 20000,
            errors: ['time']
          });
        } catch (err) {
          message.channel.send('You did not send a vaild response or you did not respond in time.')
        }
        if (response2.first().content.toLowerCase() === 'yes') {
          message.channel.send(`${n10} has been removed from the shop.`);
          Name10.set(`name10_${message.guild.id}`, 'not set');
          Cost10.set(`cost10_${message.guild.id}`, 'not set');
          Item10.set(`item10_${message.guild.id}`, 'not set');
        } else if (response2.first().content.toLowerCase() !== 'yes') return message.channel.send(`${n10} will not be removed from the shop.`)
      }
    }
    
    if (cmd === 'reset' || arg === '<@460159835544092674> shop reset') {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sorry you cant do this right now. Try again when you have the administrator permission');
      
      message.channel.send('Are you sure you want to reset the shop?');
      let response;
      try {
        response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
          max: 1,
          time: 20000,
          errors: ['time']
        });
      } catch (err) {
        message.channel.send('You did not send a vaild response or you did not respond in time.')
      }
      
      if (response.first().content.toLowerCase() === 'yes') {
        Name1.set(`name1_${message.guild.id}`, 'not set');
        Name2.set(`name2_${message.guild.id}`, 'not set');
        Name3.set(`name3_${message.guild.id}`, 'not set');
        Name4.set(`name4_${message.guild.id}`, 'not set');
        Name5.set(`name5_${message.guild.id}`, 'not set');
        Name6.set(`name6_${message.guild.id}`, 'not set');
        Name7.set(`name7_${message.guild.id}`, 'not set');
        Name8.set(`name8_${message.guild.id}`, 'not set');
        Name9.set(`name9_${message.guild.id}`, 'not set');
        Name10.set(`name10_${message.guild.id}`, 'not set');
        
        Cost1.set(`cost1_${message.guild.id}`, 'not set');
        Cost2.set(`cost2_${message.guild.id}`, 'not set');
        Cost3.set(`cost3_${message.guild.id}`, 'not set');
        Cost4.set(`cost4_${message.guild.id}`, 'not set');
        Cost5.set(`cost5_${message.guild.id}`, 'not set');
        Cost6.set(`cost6_${message.guild.id}`, 'not set');
        Cost7.set(`cost7_${message.guild.id}`, 'not set');
        Cost8.set(`cost8_${message.guild.id}`, 'not set');
        Cost9.set(`cost9_${message.guild.id}`, 'not set');
        Cost10.set(`cost10_${message.guild.id}`, 'not set');
        
        Item1.set(`item1_${message.guild.id}`, 'not set');
        Item2.set(`item2_${message.guild.id}`, 'not set');
        Item3.set(`item3_${message.guild.id}`, 'not set');
        Item4.set(`item4_${message.guild.id}`, 'not set');
        Item5.set(`item5_${message.guild.id}`, 'not set');
        Item6.set(`item6_${message.guild.id}`, 'not set');
        Item7.set(`item7_${message.guild.id}`, 'not set');
        Item8.set(`item8_${message.guild.id}`, 'not set');
        Item9.set(`item9_${message.guild.id}`, 'not set');
        Item10.set(`item10_${message.guild.id}`, 'not set');
        return message.channel.send('All shop items have been removed from the server.');
      } else if (response.first().content.toLowerCase() !== 'yes') return message.channel.send('The shop will not be reset.')
    }
    if (cmd === 'help' || arg === '<@460159835544092674> shop help') {
      let helpEmbed = new Discord.RichEmbed()
      .setTitle('**Shop Help Menu**')
      .setColor('RANDOM')
      .addField(`${prefix}shop`, 'This will show you the shop')
      .addField(`${prefix}shop add`, `This will let you add an item to the shop when you run this command you will be asked questions to let the bot know what you want to add to the shop.`)
      .addField(`${prefix}shop remove`, 'This will let you remove an item from the shop.')
      .addField(`${prefix}shop reset`, 'This will remove all items from the shop.')
      message.channel.send(helpEmbed);
    }
  } else {
    let shopembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('here are all shop items')
    .setDescription('To buy an item use the commad ;buy <shop item number>')
    .addField("Shop Item 1", '<@&481129804347867165> you need to pop 10 bubbles to buy this role.')
    .addField("Shop Item 2", "<@&481581654167781392> you need to pop 25 bubbles to buy this role.")
    .addField("Shop Item 3", "<@&481609753651576842> you need to pop 50 bubbles to buy this role.")
    .addField("Shop Item 4", "<@&481609899206508545> you need to pop 100 bubbles to buy this role.")
    .addField("Shop Item 5", "<@&481610167083991071> you need to pop 200 bubbles to buy this role.")
    .addField("Shop Item 6", "<@&481614285416431617> you need to pop 300 bubbles to buy this role.")
    .addField("Shop Item 7", "<@&481615302459785216> you need to pop 400 bubbles to buy this role.")
    .addField("Shop Item 8", "<@&481613362099126273> you need to pop 500 bubbles to buy this role.")
    .addField("Shop Item 9", "<@&481616059930247169> you need to pop 1000 bubbles to buy this role.")
    .addField("Shop Item 10", "<@&481615070930010122> you need to pop 5000 bubbles to buy this role.")
    .addField("Shop Item 11", "<#483550966965075968> you need to pop and pay 10000 bubbles to talk in this channel")
    .addField("Shop Item 12", "<#483551789254311937> you need to pop and pay 5 bubbles to talk in the channel")
    .addField("NOTE", "**to pop bubbles do the ;bubble command in <#481178520718934026> you can pop one bubble every 30 seconds.**")
    .setTimestamp(message.createdAt)
    message.channel.send(shopembed);
  }
}

exports.help = {
  name: 'shop'
}