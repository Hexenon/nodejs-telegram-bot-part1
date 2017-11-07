/* globals bot */

/* when we receive the action delete, we just delete the message */
module.exports.when = 'delete';


/**
 * deletes the current message.
 * @param deleteMessage
 */
module.exports.do = ({ deleteMessage }) => deleteMessage();
