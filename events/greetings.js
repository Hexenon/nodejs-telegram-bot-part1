/* globals bot */

/**
 * Can be regular expression or String
 * @type {RegExp}
 */
module.exports.when = new RegExp('^greet(ings)?(\\s*)?$', 'i');

/**
 * What to do when the pattern fires ?
 * @param ctx
 */
module.exports.do = (ctx)=>{
    ctx.reply('OH Greetings back!')
};