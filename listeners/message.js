/* globals bot */

/* when receive a message*/
module.exports.when = 'message';

/**
 * beautify the answer
 * @type {Markup}
 */
const Markup = require('telegraf/markup');
const replyOptions = Markup.inlineKeyboard([
    Markup.urlButton('❤️', 'https://github.com/Hexenon'),
    Markup.callbackButton('Delete', 'delete')
]).extra();

/**
 * handle the message and answer buttons
 * @param ctx
 */
module.exports.do = (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, replyOptions);
