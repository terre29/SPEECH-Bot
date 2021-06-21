const Discord = require('discord.js');

module.exports = function(message) {
    let server = message.guild;
    let name =  message.content.split(' ')[1]

    if (!name) {
        message.reply("You can't create a channel without a name!");
    } else {
        server.channels.create(name, {
            type: 'text'
        }).then((channel) => {
            channel.setParent(message.channel.parent);
            const successEmbedMessage = new Discord.MessageEmbed()
            .setTitle('Hey, new voice channel was created!')
            .setDescription(name + ` Be sure to join! <#${channel.id}>`);
            message.channel.send(successEmbedMessage);
        });
    }
}