const needle = require('needle');
var recentlyCalled = false;

function restartRestriction() {
    recentlyCalled = false
}


module.exports = {
    name: 'get twitter meme',
    description : 'post twitter meme to desired channel',
    searchMeme: async (message) => {
        if (recentlyCalled) {
            message.reply('Easy pal!, Give me 5 second to search the meme');
        } else {
            const url = 'https://meme-api.herokuapp.com/gimme';
            const meme = await needle('get', (url), {

            });
            console.log(meme.body)
            const memeImage = meme.body.preview[3];
            message.channel.send('Here\'s a meme for ya. LMAO', {files : [memeImage]})
            recentlyCalled = true
            setTimeout(restartRestriction, 5000)
        }  
    }
}