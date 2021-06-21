const {WebhookClient} = require("discord.js");

module.exports = {
    name: 'webhookGetTweet',
    run : async(client, message, args) => {
        const webhook = new WebhookClient('856066273591296031', '2cCxRxGAaEC4yn8-_LB6nUFWv1GVdOlJTgYWPwGdU4Kkm_ABPLxahmM9hD_0SEcrHobg');
        console.log(message.author.tag);
        webhook.send(`This is from webhook ${message.client.user.username} ~~ ${client.user.username}`), {
            username : message.client.user.username,
            avatarURL: message.author.displayAvatarURL({dynamic: true})
        }
    }
} 