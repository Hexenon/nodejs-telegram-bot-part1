/* globals bot */

/**
 * This fires when the user does /start
 * @param ctx
 * @returns {*}
 */
module.exports = (ctx) => {
    console.log('Chart started with id:', ctx.from.id);
    return ctx.reply('Welcome dude!')
};