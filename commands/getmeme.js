const needle = require('needle');
const { MessageAttachment } = require('discord.js')
var recentlyCalled = false;

function restartRestriction() {
    recentlyCalled = false
}


module.exports = {
    name: 'get twitter meme',
    description : 'post twitter meme to desired channel',
    searchMeme(message) {
        if (recentlyCalled) {
            message.reply('Easy pal!, Give me 5 second to search the meme');
        } else {
            const url = 'https://meme-api.herokuapp.com/gimme';
            needle.get(url, function(error, response, meme){
                if (error) {
                    console.log(err)
                    message.reply('Whoops, there was an error. Please try again later')
                    throw error;
                }  else {
                    console.log(meme)
                    const preview = meme.preview
                    const mLength = preview.length
                    const attachment = new MessageAttachment(preview[mLength-1])
                    message.channel.send('Here\'s a meme for ya. LMAO', attachment)
                    recentlyCalled = true
                    setTimeout(restartRestriction, 5000)
                }
            })
        }  
    }
}