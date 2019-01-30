
const LogsErrors = (
  (message)=>
    (next)=>
      async function() {
        try {
          return await next.apply(this, arguments);
        } catch(err) {
          console.log(message, err);
          throw err;
        }
      }
)

module.exports = exports = LogsErrors;
