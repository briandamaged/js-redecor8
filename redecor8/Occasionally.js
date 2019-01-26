
const AppliesWhen = require('./AppliesWhen');

const Occasionally = (
  (p)=>
    AppliesWhen(()=> Math.random() <= p)
);

module.exports = exports = Occasionally;
