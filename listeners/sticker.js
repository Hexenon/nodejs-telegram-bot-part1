/* globals bot */



/* fires when we receive a sticker */
module.exports.when = 'sticker';

/* What to do when the bot gets a sticker */
module.exports.do = (ctx) => ctx.reply('👍');
