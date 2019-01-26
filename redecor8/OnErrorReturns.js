
const OnErrorReturns = (
  (value)=>
    (next)=>
      async function() {
        try {
          return await next.apply(this, arguments);
        } catch(err) {
          return value;
        }
      }
);

module.exports = exports = OnErrorReturns;
