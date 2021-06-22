const Discord = require('discord.js');

module.exports = {
    
    testTweet(message) {
        const memberOfKotoba = message.content.split(' ')[1];
        var viewModel = require('../viewmodel/twitterembedviewmodel.js');
        switch (memberOfKotoba) {
            case 'natasha_mikha14':
                const memberNatasha = require('../kotobamember/natasha.js');
                viewModel.nameToDisplay = memberNatasha.name;
                viewModel.occupation = memberNatasha.occupation;
                viewModel.palletcolor = memberNatasha.palletcolor;
                viewModel.tweetMedia = [];
                viewModel.tweetText = 'This is the text of the tweet text'
                viewModel.twitterurl = memberNatasha.twitterurl
                viewModel.twitteruser = memberNatasha.twitteruser
                break;
            case 'JoanaMaoh':
                const memberJoana = require('../kotobamember/joana.js');
                viewModel.nameToDisplay = memberJoana.name;
                viewModel.occupation = memberJoana.occupation;
                viewModel.palletcolor = memberJoana.palletcolor;
                viewModel.tweetMedia = [];
                viewModel.tweetText = 'This is the text of the tweet text'
                viewModel.twitterurl = memberJoana.twitterurl
                viewModel.twitteruser = memberJoana.twitteruser
                break;
            case 'yuuichisaitou_':
                const memberYuuichi = require('../kotobamember/yuuichi.js');
                viewModel.nameToDisplay = memberYuuichi.name;
                viewModel.occupation = memberYuuichi.occupation;
                viewModel.palletcolor = memberYuuichi.palletcolor;
                viewModel.tweetMedia = [];
                viewModel.tweetText = 'This is the text of the tweet text'
                viewModel.twitterurl = memberYuuichi.twitterurl
                viewModel.twitteruser = memberYuuichi.twitteruser
                break;
            case 'NoyomiNeichi':
                const memberNoyomi = require('../kotobamember/noyomi.js');
                viewModel.nameToDisplay = memberNoyomi.name;
                viewModel.occupation = memberNoyomi.occupation;
                viewModel.palletcolor = memberNoyomi.palletcolor;
                viewModel.tweetMedia = [];
                viewModel.tweetText = 'This is the text of the tweet text'
                viewModel.twitterurl = memberNoyomi.twitterurl
                viewModel.twitteruser = memberNoyomi.twitteruser
                break;
            case 'ryoukochikage':
                const memberRyouko = require('../kotobamember/ryouko.js');
                viewModel.nameToDisplay = memberRyouko.name;
                viewModel.occupation = memberRyouko.occupation;
                viewModel.palletcolor = memberRyouko.palletcolor;
                viewModel.tweetMedia = [];
                viewModel.tweetText = 'This is the text of the tweet text'
                viewModel.twitterurl = memberRyouko.twitterurl
                viewModel.twitteruser = memberRyouko.twitteruser
                 break;
            default :
            break;  
        }

        const embedMessage = new Discord.MessageEmbed()
            .setColor(viewModel.palletcolor)
            .setTitle('Tweet Posted!')
            .setAuthor(`${viewModel.Name}`, 'https://i.imgur.com/qEGidBc.png', `${viewModel.twitterurl}`)
            .setDescription(viewModel.tweetText)
            .setFooter(`${viewModel.nameToDisplay}`, 'https://i.imgur.com/qEGidBc.png')
            message.channel.send(`Hey look at it folks! ${viewModel.twitteruser} has just tweet something! Check it out now!`)
            message.channel.send(embedMessage)
    }
}