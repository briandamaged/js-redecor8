
/**
 * Converts `thing` into a function that can
 * generate a log message.
 */
const MessageFunc = (
  (thing)=>
    (
      (typeof(thing) === 'function')
        ? thing
        : ()=> thing
    )
);

module.exports = exports = MessageFunc;
