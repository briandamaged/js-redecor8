
const When = (
  (condition)=>
    (decorate)=>
      (next)=>
        async function() {
          if(condition.apply(this, arguments)) {
            return decorate(next).apply(this, arguments);
          } else {
            return next.apply(this, arguments);
          }
        }
);

module.exports = exports = When;
