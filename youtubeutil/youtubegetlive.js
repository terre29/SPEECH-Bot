const { Intents } = require('discord.js');
const {google} = require('googleapis');
const youtube = google.youtube('v3');

module.exports = {
    getLive: async(client) => {
        const timeNow = new Date(Date.now() - 1800000);
        const guild = client.guilds.cache.get('783974041991512094');
        const ktbsRoleId = '<@&783974277602082819>';
        const channelTextYoutube = guild.channels.cache.get('831163026043306044');
        const maintenanceChannel = guild.channels.cache.get('857505960594505749');
        const kottamaRoleId = '<@&831483042371469312>'

        831483042371469312

        const timeInIso = new Date(timeNow.getTime() - new Date().getTimezoneOffset()).toISOString();   
        const params = {
            part: [
                "snippet"
              ],
              key : process.env.YOUTUBE_API_HEROKU_KEY,
              channelId: process.env.KOTOBA_CHANNEL_HEROKU_ID,
              order : 'date',
              maxResults: 5,
              publipublishedAfter : timeInIso
        };
        const response = await youtube.search.list(params);
        const item = response.data.items
        console.log(item);

        if (item) {
            var videoToShow = [];
            const iLen = item.length
            for(i=0; i< iLen; i++) {
                if (item[i].snippet.liveBroadcastContent === 'upcoming') {
                    videoToShow.push(item[i].id.videoId)
                } 
            }
            vLen = videoToShow.length;
            for(i=0;i < vLen; i++) {
                channelTextYoutube.send(`Hey ${kottamaRoleId}!, Kotoba St. has a new live waiting room. Check it out now! https://www.youtube.com/watch?v=${videoToShow[i]}`);
            }
        } else {
            console.log('no video uploaded')
        }
        
    }
}