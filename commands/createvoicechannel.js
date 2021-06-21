const Discord = require('discord.js');

module.exports = function(message) {
    let server = message.guild;
    let name =  message.content.split(' ')[1];
    let limit = Number(message.content.split(' ')[2]);
    console.log(limit)
    if (!name) {
        message.reply("You can't create a channel without a name!");
    } else if (!limit || limit === 0){
        message.reply("Don't forget to create the limit or else the channel will burn!")
    } else {
        server.channels.create(name, {
            type: 'voice',
            userLimit: limit
        }).then((channel) => {
            channel.setParent(message.channel.parent);
            const successEmbedMessage = new Discord.MessageEmbed()
            .setTitle('Text Channel Created!')
            .setDescription(name + ` was created! Don\'t forget to check it out! <#${channel.id}>`);
            message.channel.send(successEmbedMessage);
        });
    }
}