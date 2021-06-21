const Discord = require('discord.js');

module.exports = {
    name: 'get help',
    description: 'when user don\'\t know what to do',
    getHelp(message) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ff5a00')
        .setTitle('I can help you for')
        .setDescription('You need some help? Here what I can do for you')
        .addFields(
            {name: 'Create a text channel : ', value: '//ctc(space)name. EX: //ctc Meeting-Room'},
            {name: 'Create a voice channel : ', value: '//cvc(space)name(space)limit. EX: //cvc Council-Meeting 4'},
            {name: 'Burn people(Kick) : ', value: '//burn(space)name. EX: //burn Hyunwoo'},
            {name: 'Patrol : ', value: 'Folks who spamming will be warned and will be burn if they keep spaming'},
        )
        message.channel.send(helpEmbed);
    }
}