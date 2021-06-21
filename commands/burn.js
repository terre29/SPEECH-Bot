module.exports = {
    name: 'burn',
    description: 'for burning (kicking) people',
    burnMember(message) {
        if (!message.guild) return;

    if(message.member.roles.cache.has('856190641403199559')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick(`${user.tag} was burned due boss\' command`)
                .then(() => {
                    message.reply(`${user.tag} was burned by Adriana! He/She leave the server!`);
                })
                .catch(err => {
                    message.reply('Dang! I ran out my fuel! I can\'t burn them');
                    console.error(err);
                    });
                } else {
                    message.reply('I could not find her/him!');
                }
            } else {    
                message.reply('Who should I burn? You didn\'t tell me');
            }
        } else {
            message.reply('Sorry folk, I only take commands from my bosses');
        }
    } 
}