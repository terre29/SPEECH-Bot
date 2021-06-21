const Twitter = require('twitter-v2');
const needle = require('needle');

module.exports = {   
    run : async() => {
        const client = new Twitter ({
            consumer_key: 'pgb3CLQokmQRLgqIB6HVtax6x',
            consumer_secret: 'wI9w9DCA40xWlLLf3WmXQSb4vqz6mn44a2NNpGB1nw8L2jscXw',
            access_token_key: '1395936938637467651-dndLSLJGMCWWFnmmzJOKUwQNkcK4Yo',
            access_token_secret: 'DCmCDyKluUBuwY1RYAPlvbkaUlvMWbWo4pUOMOEhUhZIM',       
        });
        const { data } = await client.get('tweets', { ids: '1395936938637467651' });
        console.log(data);
    }
    
}