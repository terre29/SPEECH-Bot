const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', ()=> {
    console.log("Online");
});

client.on('ready', () => {
  console.log('Ready to burn!');
});

client.on('message', message => {
  if (message.author.username == 'Adriana Hooker') {
    message.delete();
    message.channel.send(message.content);
  }
  console.log(message.author.id)
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
      case '//burn' :
        const burn = require('./commands/burn.js');
        burn.burnMember(message);
        break
  }

  if (message.content === 'ping') {
      const user = message.author.username;
      message.channel.send(user);
  }
});  


  
client.login("ODU1ODA0MjA4NDU2MjY5ODI0.YM3zxw.-uOom6NXE3vps94e6t7Lm0SuSeI");