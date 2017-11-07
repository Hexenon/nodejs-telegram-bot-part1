const autoload = require('auto-load');
const Telegraf = require('telegraf');

//--------------------------------------------
// Config files
//--------------------------------------------
const config = autoload('./config');

//--------------------------------------------
// Bot declaration global
//--------------------------------------------
bot = new Telegraf(config.bot.token);

//--------------------------------------------
// Error handling
//--------------------------------------------
bot.catch((err) => {
    console.error('Ooops', err)
});

//--------------------------------------------
// Bot middleware for profiling
//--------------------------------------------
bot.use((ctx, next) => {
    const start = new Date();
    return next(ctx).then(() => {
        const ms = new Date() - start;
        console.log('Response time %sms', ms)
    })
});


//--------------------------------------------
// Bot basic commands
//--------------------------------------------
const commands = autoload('./commands');
/**
 * Iterates the commands to attach them to the "command" Telegraf wrapper.
 */
Object.keys(commands).forEach((commandKey)=>{
    bot.command(commandKey, commands[commandKey]);
});



//--------------------------------------------
// Events guided by RegExp patterns or Strings.
// guided by http://telegraf.js.org/#/?id=middleware
//--------------------------------------------
const events = autoload('./events');
/**
 * Iterates the object model to get all the events and what to do when an event fires.
 */
Object.keys(events).forEach((eventKey)=>{
    let event = events[eventKey];
    bot.hears(event.when , event.do);
});


//--------------------------------------------
// Listeners guided by official Telegraf documentation
// http://telegraf.js.org/#/?id=middleware
//--------------------------------------------
const listeners = autoload('./listeners');
/**
 * Iterates the object model to get all the listener firing events.
 */
Object.keys(listeners).forEach((listenerKey)=>{
    let listener = listeners[listenerKey];
    bot.on(listener.when, listener.do);
});


//--------------------------------------------
// Actions guided by official Telegraf documentation
// http://telegraf.js.org/#/?id=middleware
//--------------------------------------------
const actions = autoload('./actions');
/**
 * Iterates the object model to get all the actions firing events.
 */
Object.keys(actions).forEach((actionKey)=>{
    let action = actions[actionKey];
    bot.on(action.when, action.do);
});


//--------------------------------------------
// Static examples
//--------------------------------------------
bot.hears(/buy/i, (ctx) => ctx.reply('Wanna buy an i?'));





bot.startPolling();