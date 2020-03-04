exports.run = async(bot, message, args) => {
  const discord = bot.discord;
  const db = bot.db;
  const resp = db.all();

  resp.sort((a, b) => (a.data < b.data) ? 1 : -1);
  let paginatedItems = resp.slice(0, 10);
  let total_pages = Math.ceil(resp.length / 10);

  let lbEmbed = new discord.MessageEmbed()
  .setTitle('Leaderboard')
  .setColor('RANDOM')
  .setFooter(`Page 1 out of ${total_pages}`)
  let i = 0;
  let page = 1;
  let words = ['First', 'Second', "Third", "Forth", 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
  let words2 = ['Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];
  let words3 = ['TwentyFirst', 'TwentySecond', 'TwentyThird', 'TwentyForth', 'TwentyFifth', 'TwentySixth', 'TwentySeventh', 'TwentyEighth', 'TwentyNinth', 'Thirtieth'];
  let words4 = ['ThirtyFirst', 'ThirtySecond', 'ThirtyThird', 'ThirtyForth', 'ThirtyFifth', 'ThirtySixth', 'ThirtySeventh', 'ThirtyEighth', 'ThirtyNinth', 'Fortieth'];
  let words5 = ['FortyFirst', 'FortySecond', 'FortyThird', 'FortyForth', 'FortyFifth', 'FortySixth', 'FortySeventh', 'FortyEighth', 'FortyNinth', 'Fiftieth'];
  let words6 = ['FiftyFirst', 'FiftySecond', 'FiftyThird', 'FiftyForth', 'FiftyFifth', 'FiftySixth', 'FiftySeventh', 'FiftyEighth', 'FiftyNinth', 'Sixtieth'];
  let words7 = ['SixtyFirst', 'SixtySecond', 'SixtyThird', 'SixtyForth', 'SixtyFifth', 'SixtySixth', 'SixtySeventh', 'SixtyEighth', 'SixtyNinth', 'Seventieth'];
  let words8 = ['SeventyFirst', 'SeventySecond', 'SeventyThird', 'SeventyForth', 'SeventyFifth', 'SeventySixth', 'SeventySeventh', 'SeventyEighth', 'SeventyNinth', 'Eightieth'];
  let words9 = ['EightyFirst', 'EightySecond', 'EightyThird', 'EightyForth', 'EightyFifth', 'EightySixth', 'EightySeventh', 'EightyEighth', 'EightyNinth', 'Ninetieth'];
  let words10 = ['NinetyFirst', 'NinetySecond', 'NinetyThird', 'NinetyForth', 'NinetyFifth', 'NinetySixth', 'NinetySeventh', 'NinetyEighth', 'NinetyNinth', 'OneHundredth'];

  paginatedItems.forEach(paginatedItem => {
    let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
    if (bot.users.cache.get(user) === undefined) {
      db.delete(paginatedItem.ID);
    } else {
      lbEmbed.addField(`${words[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);
    }
  });
  message.channel.send(lbEmbed).then(async msg => {
    if (resp.length > 10) {
      const reaction1 = await msg.react('614293189825789972');
      const reaction2 = await msg.react('❌');
      const reaction3 = await msg.react('614293189720801290');
      let first = 0;
      let second = 10;

      const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id, {
			  time: 120000
		  });
		  collector.on('collect', r => {
			  const reactionadd = resp.slice(first + 10, second + 10);
              const reactionremove = resp.slice(first - 10, second - 10);
        
        if (r.emoji.name === 'Arrow_Right' && reactionadd !== 0) {
          r.remove(message.author.id);
          page++;
          if (page === 2) {
            first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              if (bot.users.cache.get(user) === undefined) {
                db.delete(paginatedItem.ID);
              } else {
                newEmbed.addField(`${words2[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);
              }
            });
            msg.edit(newEmbed);
          } else if (page === 3) {
            first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              if (bot.users.cache.get(user) === undefined) {
                db.delete(paginatedItem.ID);
              } else {
                newEmbed.addField(`${words3[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);
              }
            });
            msg.edit(newEmbed);
          } else if (page === 4) {
            first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              if (bot.users.cache.get(user) === undefined) {
                db.delete(paginatedItem.ID);
              } else {
                newEmbed.addField(`${words4[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
              }
            });
            msg.edit(newEmbed);
          } else if (page === 5) {
            page = 1;
            if (page === 1) {
              first = 0;
              second = 10;
              i = 0;
              paginatedItems = resp.slice(first, second);
              
              const newEmbed = new discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`LeaderBoard`)
              .setFooter(`Page ${page} out of ${total_pages}`)
              paginatedItems.forEach(paginatedItem => {
                let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
                if (bot.users.cache.get(user) === undefined) {
                  db.delete(paginatedItem.ID);
                } else {
                  newEmbed.addField(`${words[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
                }
              });
              msg.edit(newEmbed);
            }
          }
            /*first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words5[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 6) {
            first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words6[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 7) {
            first += 10;
            second += 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words7[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 8) {
            page = 1;
            if (page === 1) {
              first = 0;
              second = 10;
              i = 0;
              paginatedItems = resp.slice(first, second);
              
              const newEmbed = new discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`LeaderBoard`)
              .setFooter(`Page ${page} out of ${total_pages}`)
              paginatedItems.forEach(paginatedItem => {
                let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
                newEmbed.addField(`${words[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);              
              });
              msg.edit(newEmbed);
            }
          }*/
        } else if (r.emoji.name === 'Arrow_Left' && reactionremove !== 0) {
          r.remove(message.author.id);
          page--;
          if (page === 1) {
            first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 2) {
            first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words2[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 3) {
            first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words3[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 4) {
            first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words4[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 0) {
            page = 4;
            if (page === 4) {
              first = 30;
              second = 40;
              i = 0;
              paginatedItems = resp.slice(first, second);
              
              const newEmbed = new discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`LeaderBoard`)
              .setFooter(`Page ${page} out of ${total_pages}`)
              paginatedItems.forEach(paginatedItem => {
                let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
                newEmbed.addField(`${words4[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
              });
              msg.edit(newEmbed);
            }
          }
            /*first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words5[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 6) {
            first -= 10;
            second -= 10;
            i = 0;
            paginatedItems = resp.slice(first, second);
            
            const newEmbed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`LeaderBoard`)
            .setFooter(`Page ${page} out of ${total_pages}`)
            paginatedItems.forEach(paginatedItem => {
              let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
              newEmbed.addField(`${words6[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);            
            });
            msg.edit(newEmbed);
          } else if (page === 0) {
            page = 7;
            if (page === 7) {
              first = 60;
              second = 70;
              i = 0;
              paginatedItems = resp.slice(first, second);
              
              const newEmbed = new discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`LeaderBoard`)
              .setFooter(`Page ${page} out of ${total_pages}`)
              paginatedItems.forEach(paginatedItem => {
                let user = (paginatedItem.ID.charAt(8) + paginatedItem.ID.substr(9)).toString();
                newEmbed.addField(`${words7[i++]} Place is:`, `${bot.users.cache.get(user).tag} With ${paginatedItem.data} Bubbels.`);              
              });
              msg.edit(newEmbed);
            }
          }*/
        } else if (r.emoji.name = '❌') {
          r.remove(message.author.id);
          reaction1.remove();
          reaction2.remove();
          reaction3.remove();
        }
      });
    }
  });
}

exports.help = {
  name: 'leaderboard',
  aliases: ['lb']
}