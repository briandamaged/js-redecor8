
/**
 * This is a "Decorator Decorator".  It only applies
 * its nested decorator when the condition evaluates
 * to something truthy.  This can be useful in many
 * scenarios, such as:
 *
 *   1. Logging only a subset of the data
 *   2. Introducing logging for specific scenarios
 *   3. Installing/Uninstalling behaviors at runtime
 *   4. Etc.
 *
 */
const When = (
  (condition)=>
    (decorator)=>
      (next)=>
        async function() {
          if(await condition.apply(this, arguments)) {
            return decorator(next).apply(this, arguments);
          } else {
            return next.apply(this, arguments);
          }
        }
);

module.exports = exports = When;
