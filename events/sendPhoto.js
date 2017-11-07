/* globals bot */

/**
 * Can be regular expression or String
 * @example send a photo | send me a picture | send me a photo | send photo
 * @type {RegExp}
 */
module.exports.when = new RegExp('^(hey)?(\\s*)?(send|i want)(\\s*)?(me)?(\\s*)?(a)?(\\s*)?(picture|pic|photo)(\\s*)?$', 'i');

/**
 * What to do when the pattern fires ?
 * @param ctx
 */
module.exports.do = (ctx)=>{
    let photoUrls = [
        'http://s2.quickmeme.com/img/fb/fb45a3d9c09edb4dc705cc5e0e244f739a3134c7cb22e0d7cd21924cb386bba1.jpg',
        'http://uproxx.files.wordpress.com/2013/11/overly-suave-it-guy-01.jpg?quality=100&w=650',
        'https://2static.fjcdn.com/large/pictures/2d/77/2d77fd_6046394.jpg',
        'http://s2.quickmeme.com/img/8d/8d16bfaea44fd95c4630139aa8aeaf94221c6dc46eff7a676dfbac1516d7f806.jpg',
        'http://s2.quickmeme.com/img/d9/d97681ad0f64c5b0145769a9f1898b785a5b7efd3097cdf848a5ae3ad815ce97.jpg',
        'https://img.devrant.com/devrant/rant/r_541065_gspVp.jpg',
        'http://s2.quickmeme.com/img/f6/f67b5348c91da84cbc50d69fd37e6df01525143b45998dfe9b1377119717d743.jpg',
        'https://pbs.twimg.com/profile_images/918433182906830848/NwsKygmV.jpg',
        'https://img.memecdn.com/programming_o_1075452.jpg',
        'http://wanna-joke.com/wp-content/uploads/2015/11/programmers-meme-no-errors.jpg'
    ];
    let randomNumber = getRandomInt(0, photoUrls.length - 1);
    let randomUrl = photoUrls[randomNumber];
    return ctx.replyWithPhoto(randomUrl);
};

/**
 * Generates a random int
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}