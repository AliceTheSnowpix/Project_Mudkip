const fetch = require('node-fetch');
const fsn = require('fs-extra');
const {Canvas} = require('canvas-constructor');

exports.run = async (_bot, message, _args) => {
    if (message.guild.member(message.mentions.users.first())) {  
        const getSlapped = async (person) => {
            const plate = await fsn.readFile('./BotCommands/assets/images/plate_brazzers.png');
            const png = person.replace('.gif', '.png');
            const {body} = await fetch(png);
            return new Canvas(634, 675)
            .setColor(0x00A2E8)
            .addRect(0, 0, 634, 675)
            .addImage(body, 0, 0, 634, 675)
            .addImage(plate, 233, 485, 384, 245)
            .toBuffer();
        }

        try {
            const person = message.mentions.users.first().avatarURL;
            const result = await getSlapped(person);
            await message.channel.send({
                files: [{
                        attachment: result, 
                        name: 'brazzers.png' 
                    }] 
                });
        } catch (error) {
            throw error;
        }
    }
}

exports.help = {
    name: "brazzers"
};