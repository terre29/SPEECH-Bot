const Discord = require('discord.js');
const client = new Discord.Client();
const t = setInterval(setTwitter, 305000)
const twitter = require('./twitterutil/gettwittertoken.js');
const youtubeUtil = require('./youtubeutil/youtubelogin.js');
const mongo = require('./mongodb/mongodb.js')
require('dotenv').config()

client.once('ready', ()=> {
  console.log("Online");
   twitter.run(client)
   checkYoutubeAPI()

});


client.on('ready', async () => {
  console.log('Ready to burn!');
  await mongo().then(mongoose => {
    try {
      console.log('The client is ready!')
    } finally {
      mongoose.connection.close()
    }
  })
});

function setTwitter() {
    twitter.run(client)
}

function checkYoutubeAPI() {
  youtubeUtil.run(client);
  setTimeout(checkYoutubeAPI, 20000)
}

client.on('message', message => {
  console.log(message.channel.id)
  if (message.author.username == 'Adriana Hooker') {
    message.delete();
    message.channel.send(message.content);
  }
  if(!message.content.startsWith('//')) return; 
  let arguments = message.content.split(' ')[0];
  switch (arguments) {
      case '//ctc' :
        const createChannel = require('./commands/createchannel.js');
        console.log('masuk create channel');
        createChannel(message);
        break;
      case '//cvc' :
        const createVoiceChannel = require('./commands/createvoicechannel.js');
        createVoiceChannel(message);
        break;
      case '//help' :
        const getHelp = require('./commands/gethelp.js');
        getHelp.getHelp(message);
        break;
      // case '//burn' :
      //   const burn = require('./commands/burn.js');
      //   burn.burnMember(message);
      //   break
      case '//twit' :
        const getExTweet = require('./commands/testtwitterpersonalize');
        getExTweet.testTweet(message);
        break;
      case '//meme' :
        const getMeme = require('./commands/getmeme.js')
        getMeme.searchMeme(message);
        break;
      // case '//time' :
      //   const timeNow = new Date(Date.now() - 5000);
      //   const timeInIso = new Date(timeNow.getTime() - new Date().getTimezoneOffset()).toISOString();
      
      //   console.log(timeNow);      
      //   console.log(timeInIso);
  }

  if (message.content === 'ping') {
      const user = message.author.username;
      message.channel.send(user);
  }
});  
client.login(process.env.DISCORD_HEROKU_TOKEN);