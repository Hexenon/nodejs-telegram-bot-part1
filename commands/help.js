/* globals bot */

/**
 * This manager fires when the user types /help
 * @param ctx
 * @returns {*}
 */
module.exports = (ctx) => {
    console.log(`${ctx.from.id} calling for help`);
    return ctx.reply('Send me a sticker please?')
};