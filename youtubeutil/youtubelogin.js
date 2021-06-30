const { Intents } = require('discord.js');
const {google} = require('googleapis');
const youtube = google.youtube('v3')

module.exports = {
    run: async(client) => {
        const timeNow = new Date(Date.now() - 20000);
        const guild = client.guilds.cache.get('783974041991512094');
        const channel = guild.channels.cache.get('831163026043306044');
        const timeInIso = new Date(timeNow.getTime() - new Date().getTimezoneOffset()).toISOString();   
        const params = {
            part: [
                "contentDetails",
                "snippet"
              ],
              key : process.env.YOUTUBE_API_HEROKU_KEY,
              channelId: process.env.KOTOBA_CHANNEL_HEROKU_ID,
              maxResults: 1,
              publishedAfter: timeInIso
        };
        const response = await youtube.activities.list(params)
        const items = response.data.items
        console.log(items.length)
        if (items.length === 0) {
            console.log('no recent upload');
        } else {
            const videoId = items[0].contentDetails.upload.videoId
            const link = `https://www.youtube.com/watch?v=${videoId}`
            channel.send(`Hey folks! Kotoba Station postd new video. Check it now! ${link}`)
        }
        return response
    }
}

