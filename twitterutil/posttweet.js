const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'post tweet',
    desc :'bot command to post tweet',
    post(datas, client) {
        const guild = client.guilds.cache.get('805693268352434206');
        const channel = guild.channels.cache.get('856053911110025217');

        const json = JSON.parse(datas);
        const { data, includes } = json;
        const { text, author_id } = data;
        const { users } = includes;

        const author = users.find(({id}) => id === author_id);
        const { user, username, profile_image_url, url} = author;
        
        let includeData = {};
        let media = [{}];
        includeData = json.includes;
        media = includeData.media;
        if(!media) {
            const embedMessage = new Discord.MessageEmbed()
            .setColor('#ff5a00')
            .setTitle('Tweet Posted!')
            .setAuthor(`${username}`, `${profile_image_url}`)
            .setDescription(text)
            .setFooter('Copyright Twitter', 'https://i.imgur.com/qEGidBc.png')
            channel.send(`Hey look at it folks! ${username} has just tweet something! Check it out now!`)
            channel.send(embedMessage)

        } else {
            let mLen = media.length;
            var images = [];
            for (i = 0; i < mLen; i++) {
                var urlMedia = ''
                urlMedia = media[i].url
                const attachment = new MessageAttachment(urlMedia, `image${i}.jpg`); 
                images.push(attachment)
            }
            const embedMessage = new Discord.MessageEmbed()
            .setColor('#ff5a00')
            .setTitle('Tweet Posted!')
            .setAuthor(`${username}`, `${profile_image_url}', '${url}`)
            .setDescription(text)
            .setFooter('Copyright Twitter', 'https://i.imgur.com/qEGidBc.png')
            .setImage(images[0].attachment)
            channel.send(`Hey look at it folks! ${username} @${user} has just tweet something! Check it out now!`)
            channel.send(embedMessage)
        }
       
       
     }
}