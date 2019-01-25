
const When = require('./When');

const Occasionally = (
  (p)=>
    When(()=> Math.random() <= p)
);

module.exports = exports = Occasionally;
