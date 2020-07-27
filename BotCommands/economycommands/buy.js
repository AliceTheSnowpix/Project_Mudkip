exports.run = async(bot, message, args) => {
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

  let selfbubbles = await db.fetch(`bubbles_${message.author.id}`);
  let prefix = await prefixes.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    prefixes.set(`prefix_${message.guild.id}`, ';');
    prefix = ';';
  }

  let Member = message.guild.member(message.author.id);
  let arg = String(message.content.toLowerCase());
  let input = message.content.slice(prefix.length).toLowerCase().split(' ').slice(1).join(' ');

  if (message.guild.id === '456629010890227714') {
    if (input === '1' || arg === '<@460159835544092674> 1') {
      let cost = 10;
      if(Member.roles.cache.has('481129804347867165')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481129804347867165');
      message.reply(`I have gave you the <@&481129804347867165> role and removed ${cost} bubbles`);
    }

    if (input === '2' || arg === '<@460159835544092674> 2') {
      let cost = 25;
      if(Member.roles.cache.has('481581654167781392')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481581654167781392');
      message.reply(`I have gave you the <@&481581654167781392> role and removed ${cost} bubbles`);
    }

    if (input === '3' || arg === '<@460159835544092674> 3') {
      let cost = 50;
      if(Member.roles.cache.has('481609753651576842')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481609753651576842');
      message.reply(`I have gave you the <@&481609753651576842> role and removed ${cost} bubbles`);
    }

    if (input === '4' || arg === '<@460159835544092674> 4') {
      let cost = 100;
      if(Member.roles.cache.has('481609899206508545')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481609899206508545');
      message.reply(`I have gave you the <@&481609899206508545> role and removed ${cost} bubbles`);
    }

    if (input === '5' || arg === '<@460159835544092674> 5') {
      let cost = 200;
      if(Member.roles.cache.has('481610167083991071')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481610167083991071');
      message.reply(`I have gave you the <@&481610167083991071> role and removed ${cost} bubbles`);
    }

    if (input === '6' || arg === '<@460159835544092674> 6') {
      let cost = 300;
      if(Member.roles.cache.has('481614285416431617')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481614285416431617');
      message.reply(`I have gave you the <@&481614285416431617> role and removed ${cost} bubbles`);
    }

    if (input === '7' || arg === '<@460159835544092674> 7') {
      let cost = 400;
      if(Member.roles.cache.has('481615302459785216')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481615302459785216');
      message.reply(`I have gave you the <@&481615302459785216> role and removed ${cost} bubbles`);
    }
    
    if (input === '8' || arg === '<@460159835544092674> 8') {
      let cost = 500;
      if(Member.roles.cache.has('481613362099126273')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481613362099126273');
      message.reply(`I have gave you the <@&481613362099126273> role and removed ${cost} bubbles`);
    }
    
    if (input === '9' || arg === '<@460159835544092674> 9') {
      let cost = 1000;
      if(Member.roles.cache.has('481616059930247169')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481616059930247169');
      message.reply(`I have gave you the <@&481616059930247169> role and removed ${cost} bubbles`);
    }
    
    if (input === '10' || arg === '<@460159835544092674> 10') {
      let cost = 5000;
      if(Member.roles.cache.has('481615070930010122')) return message.reply("you already have this item");
      if (cost > selfbubbles) return message.reply("**Sorry you do not have enough bubbles to buy that item**");
      db.subtract(`bubbles_${message.author.id}`, cost);
      Member.roles.add('481615070930010122');
      message.reply(`I have gave you the <@&481615070930010122> role and removed ${cost} bubbles`);
    }
    
    if (input === '11' || arg === '<@460159835544092674> 11') {
      let cost = 10000;
      let getchannel = message.guild.channels.cache.cache.get('483550966965075968');
      if(getchannel.permissionsFor(Member).cache.has('SEND_MESSAGES')) return message.reply('**you already have that item');
      if(cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy that')
      db.subtract(`bubbles_${message.author.id}`, cost);
      getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
      message.reply(`I have gave you access to the channel <#483550966965075968> and removed ${cost} bubbles`);
    }
    
    if (input === '12' || arg === '<@460159835544092674> 12')  {
      let cost = 5;
      let getchannel = message.guild.channels.cache.cache.get('483551789254311937');
      if(getchannel.permissionsFor(Member).cache.has('SEND_MESSAGES')) return message.reply('you already have that item');
      if(cost > selfbubbles) return message.reply('**Sorry you do not have enough bubbles to buy this');
      db.subtract(`bubbels_${message.author.id}`, cost);
      getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
      message.reply(`I have gave you access to the channel <#483551789254311937> and removed ${cost} bubbles`);
    }
  } else {
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
          return message.channel.send('There is currently nothing on the shop you can buy');
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
          return message.channel.send('There is currently nothing on the shop you can buy');
        }
    
    if (input === n1.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n1.split(' ').join(' ').toLowerCase()}`) {
      if (c1 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c1));
      if (message.guild.roles.cache.get(i1)) {
        if (Member.roles.cache.has(i1)) {
          db.add(`bubbles_${message.author.id}`, parseInt(c1));
          message.channel.send('You already have this item.');
        }
        else {
          Member.roles.add(i1);
          return message.channel.send(`I have given you the <@&${i1}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i1);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c1));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i1}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i1) && !getchannel) {
        let inventory = await db.fetch(`inventory1_${message.guild.id}_${message.author.id}_${i1}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory1_${message.guild.id}_${message.author.id}_${i1}`, 1);
            message.channel.send(`I have put ${i1} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c1));
            return message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory1_${message.guild.id}_${message.author.id}_${i1}`, 1);
          message.channel.send(`I have put ${i1} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n2.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n2.split(' ').join(' ').toLowerCase()}`) {
      if (c2 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c2))
      if (message.guild.roles.cache.get(i2)) {
        if (Member.roles.cache.has(i2)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i2);
          return message.channel.send(`I have given you the <@&${i2}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i2);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c2));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i2}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i2) && !getchannel) {
        let inventory = await db.fetch(`inventory2_${message.guild.id}_${message.author.id}_${i2}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory2_${message.guild.id}_${message.author.id}_${i2}`, 1);
            message.channel.send(`I have put ${i2} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c2));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory2_${message.guild.id}_${message.author.id}_${i2}`, 1);
          message.channel.send(`I have put ${i2} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n3.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n3.split(' ').join(' ').toLowerCase()}`) {
      if (c3 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c3))
      if (message.guild.roles.cache.get(i3)) {
        if (Member.roles.cache.has(i3)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i3);
          return message.channel.send(`I have given you the <@&${i3}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i3);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c3));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i3}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i3) && !getchannel) {
        let inventory = await db.fetch(`inventory3_${message.guild.id}_${message.author.id}_${i3}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory3_${message.guild.id}_${message.author.id}_${i3}`, 1);
            message.channel.send(`I have put ${i3} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c3));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory3_${message.guild.id}_${message.author.id}_${i3}`, 1);
          message.channel.send(`I have put ${i3} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }

    if (input === n4.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n4.split(' ').join(' ').toLowerCase()}`) {
      if (c4 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c4))
      if (message.guild.roles.cache.get(i4)) {
        if (Member.roles.cache.has(i4)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i4);
          return message.channel.send(`I have given you the <@&${i4}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i4);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c4));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i4}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i4) && !getchannel) {
        let inventory = await db.fetch(`inventory4_${message.guild.id}_${message.author.id}_${i4}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory4_${message.guild.id}_${message.author.id}_${i4}`, 1);
            message.channel.send(`I have put ${i4} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c4));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory4_${message.guild.id}_${message.author.id}_${i4}`, 1);
          message.channel.send(`I have put ${i4} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n5.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n5.split(' ').join(' ').toLowerCase()}`) {
      if (c5 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c5))
      if (message.guild.roles.cache.get(i5)) {
        if (Member.roles.cache.has(i5)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i5);
          return message.channel.send(`I have given you the <@&${i5}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i5);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c5));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i5}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i5) && !getchannel) {
        let inventory = await db.fetch(`inventory5_${message.guild.id}_${message.author.id}_${i5}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory5_${message.guild.id}_${message.author.id}_${i5}`, 1);
            message.channel.send(`I have put ${i5} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c5));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory5_${message.guild.id}_${message.author.id}_${i1}`, 1);
          message.channel.send(`I have put ${i5} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n6.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n6.split(' ').join(' ').toLowerCase()}`) {
      if (c6 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c6))
      if (message.guild.roles.cache.get(i6)) {
        if (Member.roles.cache.has(i6)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i6);
          return message.channel.send(`I have given you the <@&${i6}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i6);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c6));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i6}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i6) && !getchannel) {
        let inventory = await db.fetch(`inventory6_${message.guild.id}_${message.author.id}_${i6}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory6_${message.guild.id}_${message.author.id}_${i6}`, 1);
            message.channel.send(`I have put ${i6} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c6));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory6_${message.guild.id}_${message.author.id}_${i6}`, 1);
          message.channel.send(`I have put ${i6} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n7.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n7.split(' ').join(' ').toLowerCase()}`) {
      if (c7 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c7))
      if (message.guild.roles.cache.get(i7)) {
        if (Member.roles.cache.has(i7)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i7);
          return message.channel.send(`I have given you the <@&${i7}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i7);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c7));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i7}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i7) && !getchannel) {
        let inventory = await db.fetch(`inventory7_${message.guild.id}_${message.author.id}_${i7}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory7_${message.guild.id}_${message.author.id}_${i7}`, 1);
            message.channel.send(`I have put ${i7} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c7));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory7_${message.guild.id}_${message.author.id}_${i7}`, 1);
          message.channel.send(`I have put ${i7} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n8.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n8.split(' ').join(' ').toLowerCase()}`) {
      if (c8 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c8))
      if (message.guild.roles.cache.get(i8)) {
        if (Member.roles.cache.has(i8)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i8);
          return message.channel.send(`I have given you the <@&${i8}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i8);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c8));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i8}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i8) && !getchannel) {
        let inventory = await db.fetch(`inventory8_${message.guild.id}_${message.author.id}_${i8}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory8_${message.guild.id}_${message.author.id}_${i8}`, 1);
            message.channel.send(`I have put ${i8} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c8));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory8_${message.guild.id}_${message.author.id}_${i8}`, 1);
          message.channel.send(`I have put ${i8} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n9.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n9.split(' ').join(' ').toLowerCase()}`) {
      if (c9 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c9))
      if (message.guild.roles.cache.get(i9)) {
        if (Member.roles.cache.has(i9)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i9);
          return message.channel.send(`I have given you the <@&${i9}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i9);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c9));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i9}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i9) && !getchannel) {
        let inventory = await db.fetch(`inventory9_${message.guild.id}_${message.author.id}_${i9}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory9_${message.guild.id}_${message.author.id}_${i9}`, 1);
            message.channel.send(`I have put ${i9} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c9));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory9_${message.guild.id}_${message.author.id}_${i9}`, 1);
          message.channel.send(`I have put ${i9} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
    if (input === n10.split(' ').join(' ').toLowerCase() || arg === `<@460159835544092674> ${n10.split(' ').join(' ').toLowerCase()}`) {
      if (c10 > selfbubbles) return message.channel.send('**Sorry you do not have enough bubbles to buy this item**');
      db.subtract(`bubbles_${message.author.id}`, parseInt(c10))
      if (message.guild.roles.cache.get(i10)) {
        if (Member.roles.cache.has(i10)) return message.channel.send('You already have this item.');
        else {
          Member.roles.add(i10);
          return message.channel.send(`I have given you the <@&${i10}> role.`);
        }
      }
      let getchannel = message.guild.channels.cache.find(a => a.id === i10);
      if (getchannel) {
        if (message.channel.permissionsFor(Member).cache.has('SEND_MESSAGES')) {
          db.add(`bubbles_${message.author.id}`, parseInt(c10));
          message.channel.send('You already have this item.');
        } else {
          getchannel.overwritePermissions(Member, {SEND_MESSAGES:true, READ_MESSAGES:true});
          message.channel.send(`I have given you access to the <#${i10}> channel.`);
        }
      }
      if (!message.guild.roles.cache.get(i10) && !getchannel) {
        let inventory = await db.fetch(`inventory10_${message.guild.id}_${message.author.id}_${i10}`);
        if (inventory >= 1) {
          message.channel.send('You already have this item. Do you want to buy it again?');
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
          if (response.first().content.toLowerCase() === 'yes') {
            db.add(`inventory10_${message.guild.id}_${message.author.id}_${i10}`, 1);
            message.channel.send(`I have put ${i10} into your inventory, To check your inventory use the command ${prefix}inventory.`);
          } else if (!response.first().content.toLowerCase() === 'yes') {
            db.add(`bubbles_${message.author.id}`, parseInt(c10));
            message.channel.send('The transaction was cancelled.');
          }
        } else {
          db.add(`inventory10_${message.guild.id}_${message.author.id}_${i10}`, 1);
          message.channel.send(`I have put ${i10} into your inventory, To check your inventory use the command ${prefix}inventory.`);
        }
      }
    }
  } 
}

exports.help = {
	name: 'buy'
}