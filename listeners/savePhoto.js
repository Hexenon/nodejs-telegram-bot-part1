/* globals bot */

/* Listener when we receive a photo */
module.exports.when = "photo";

/**
 * Manager to handle the incoming photo
 * @param ctx
 * @returns {Promise.<TResult>}
 */
module.exports.do = (ctx) => {
    return bot.telegram.getFileLink(ctx.message.photo[0])
        .then((link) => {
            ctx.state.fileLink = link;
            console.log('Photo url:', ctx.state.fileLink);
            ctx.reply('Thanks, i saved this picture');
        });
};
