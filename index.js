const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzMyNDAyNDc5OTc5MDM2Njkz.Xw353A.6ogCbAgY106GPqNlMxFM3hw2SQU';

bot.on('ready', () => {
    console.log('Bot is online!');
});

const bean_list = [];
bean_list.push('https://imgur.com/a/RPwESzP');
bean_list.push('https://imgur.com/gallery/VRglA');
bean_list.push('https://imgur.com/gallery/FNRro');
bean_list.push('https://imgur.com/gallery/ZsfdCSN');

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

bot.on('message', (msg) => {
    const channel = msg.channel;
    if (channel.name === "count" && !isNaN(msg.cleanContent) && msg.author.username !== "Bean Bot") {
        var num = parseInt(msg.cleanContent, 10);
        channel.send((num += 1).toString(10));
    }
    if (msg.cleanContent.includes("bean")) {
        msg.reply(bean_list[random_number(0,4)]);
    };
});

bot.login(token);
