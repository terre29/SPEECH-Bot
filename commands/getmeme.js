const needle = require('needle')
module.exports = {
    name: 'get twitter meme',
    description : 'post twitter meme to desired channel',
    searchMeme: async (message) => {
        const url = 'https://meme-api.herokuapp.com/gimme';
        const meme = await needle('get', (url), {

        });
        console.log(meme.body)
        const memeImage = meme.body.preview[3];
        message.channel.send('Here\'s a meme for ya. LMAO', {files : [memeImage]})
        
    }
}