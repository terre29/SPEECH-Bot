const Discord = require('discord.js')
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'post tweet',
    desc :'bot command to post tweet',
    post: async(datas, client) => {
        const guild = client.guilds.cache.get('783974041991512094');
        const channel = guild.channels.cache.get('805865870941225031');
        // const channel = guild.channels.cache.get('857505960594505749');
        const json = JSON.parse(datas);
        const { data, includes } = json;
        const { text, author_id } = data;
        const { users } = includes;
        const { id } = data;
        const author = users.find(({id}) => id === author_id);
        const {username, profile_image_url, url} = author;
        var viewModel = require('../viewmodel/twitterembedviewmodel.js')
        let twitText = '';
        twitText = json.data.text;
        let includeData = {};
        let media = [{}];
        includeData = json.includes;
        media = includeData.media;

        switch (username) {
            case 'natasha_mikha14':
                const memberNatasha = require('../kotobamember/natasha.js');
                viewModel.nameToDisplay = memberNatasha.name;
                viewModel.occupation = memberNatasha.occupation;
                viewModel.palletcolor = memberNatasha.palletcolor;
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = memberNatasha.twitterurl
                viewModel.twitteruser = memberNatasha.twitteruser
                break;
            case 'JoanaMaoh':
                const memberJoana = require('../kotobamember/joana.js');
                viewModel.nameToDisplay = memberJoana.name;
                viewModel.occupation = memberJoana.occupation;
                viewModel.palletcolor = memberJoana.palletcolor;
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = memberJoana.twitterurl
                viewModel.twitteruser = memberJoana.twitteruser
                break;
            case 'yuuichisaitou_':
                const memberYuuichi = require('../kotobamember/yuuichi.js');
                viewModel.nameToDisplay = memberYuuichi.name;
                viewModel.occupation = memberYuuichi.occupation;
                viewModel.palletcolor = memberYuuichi.palletcolor;
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = memberYuuichi.twitterurl
                viewModel.twitteruser = memberYuuichi.twitteruser
                break;
            case 'NoyomiNeichi':
                const memberNoyomi = require('../kotobamember/noyomi.js');
                viewModel.nameToDisplay = memberNoyomi.name;
                viewModel.occupation = memberNoyomi.occupation;
                viewModel.palletcolor = memberNoyomi.palletcolor;
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = memberNoyomi.twitterurl
                viewModel.twitteruser = memberNoyomi.twitteruser
                break;
            case 'ryoukochikage':
                const memberRyouko = require('../kotobamember/ryouko.js');
                viewModel.nameToDisplay = memberRyouko.name;
                viewModel.occupation = memberRyouko.occupation;
                viewModel.palletcolor = memberRyouko.palletcolor;
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = memberRyouko.twitterurl
                viewModel.twitteruser = memberRyouko.twitteruser
                 break;
            default :
                viewModel.nameToDisplay = username
                viewModel.occupation = ''
                viewModel.palletcolor = '4d4d4d'
                viewModel.tweetMedia = media;
                viewModel.tweetText = twitText;
                viewModel.twitterurl = 'https://twitter.com/home'
                viewModel.twitteruser = username
                break;  
        }

        if(!viewModel.tweetMedia) {
            console.log(id);
            const embedMessage = new Discord.MessageEmbed()
            .setColor(`${viewModel.palletcolor}`)
            .setTitle('Tweet Posted!')
            .setURL(`https://twitter.com/${viewModel.twitteruser}/status/${id}`)
            .setAuthor(`${viewModel.nameToDisplay}`, `${profile_image_url}`, `${viewModel.twitterurl}`)
            .setDescription(`${viewModel.tweetText}`)
            .setThumbnail('https://i.imgur.com/7Kg8PuW.png')
            .setFooter(`${viewModel.twitteruser} of Kotoba Station`, 'https://i.imgur.com/qEGidBc.png')
            channel.send(`Hey folks! ${viewModel.nameToDisplay} has just tweet something! Check it out now!`)
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
            .setColor(`${viewModel.palletcolor}`)
            .setTitle('Tweet Posted!')
            .setURL(`https://twitter.com/${viewModel.twitteruser}/status/${id}`)
            .setAuthor(`${viewModel.nameToDisplay}`, `${profile_image_url}`, `${viewModel.twitterurl}`)
            .setDescription(`${viewModel.tweetText}`)
            .setThumbnail('https://i.imgur.com/7Kg8PuW.png')
            .setFooter(`${viewModel.twitteruser} of Kotoba Station`, 'https://i.imgur.com/qEGidBc.png')
            .setImage(images[0].attachment)
            channel.send(`Hey folks! ${viewModel.nameToDisplay} has just tweet something! Check it out now!`)
            channel.send(embedMessage)
        }
     }
}