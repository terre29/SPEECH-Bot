const needle = require('needle');


const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?user.fields=username,profile_image_url,url&expansions=author_id,attachments.media_keys&media.fields=preview_image_url,url'

//const rules = [{value : '-is:retweet (from:natasha_mikha14 OR from:ryoukochikage OR from:NoyomiNeichi OR from:JoanaMaoh OR from:KotobaStation)'}]
const rules = [{value : 'cat'}]

// get stream rules
async function getTweetsRules() {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAK5oQwEAAAAAlh%2FWJL%2BDsrSNdxYZucVXmI5pUek%3DbZIAzdJtCsr3TII4h2N8WvOAtiUhQB7xwaAvsWBBYAYo3UjVp0',
        }
    })

    console.log(response.body)
    return response.body
}


function streamTweet(client) {
    const stream = needle.get(streamURL, {
        headers: {
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAK5oQwEAAAAAlh%2FWJL%2BDsrSNdxYZucVXmI5pUek%3DbZIAzdJtCsr3TII4h2N8WvOAtiUhQB7xwaAvsWBBYAYo3UjVp0',
        }
    })

    stream.on('data', (datas) => {
        try {
            const json = JSON.parse(datas)
            console.log(json)
          const poster = require('./posttweet');
          poster.post(datas, client)
        } catch (error) {
            
        }
    })
}

// delete stream rules
async function deleteTweetsRules(rules) {
    if(!Array.isArray(rules.data)) {
        return null
    }

    const ids = rules.data.map((rule) => rule.id)

    const data = {
        delete: {
            ids: ids
        }
    }
    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type' : 'application/json',
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAK5oQwEAAAAAlh%2FWJL%2BDsrSNdxYZucVXmI5pUek%3DbZIAzdJtCsr3TII4h2N8WvOAtiUhQB7xwaAvsWBBYAYo3UjVp0',
        }
    })
    return response.body
}

// post stream rules
async function setTweetsRules() {
    const data = {
        add: rules
    }
    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type' : 'application/json',
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAK5oQwEAAAAAlh%2FWJL%2BDsrSNdxYZucVXmI5pUek%3DbZIAzdJtCsr3TII4h2N8WvOAtiUhQB7xwaAvsWBBYAYo3UjVp0',
        }
    }) 
    return response.body
}

module.exports = {   
    run : async(client) => {
        console.log(client.user.username)
        try {
            currentRules = await getTweetsRules()
            await deleteTweetsRules(currentRules)
            await setTweetsRules()
        } catch (error) {
            console.error(error)
            process.exit(1)
        }

        streamTweet(client)
    }
    
}