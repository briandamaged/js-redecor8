
const compose = (
  (decorators)=>
    (next)=>
      Array.from(decorators).reverse().reduce((_next, d)=> d(_next), next)
);

module.exports = exports = compose;
