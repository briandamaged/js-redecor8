
const Pass = require('./Pass');

/**
 * This is another "Decorator Decorator".  It only
 * installs the nested decorator when the condition
 * evaluates to something truthy.  This is useful
 * when the decision can be made during the
 * initialization phase of an application, and the
 * decision never needs to be revisited.  Ex:
 *
 *   1. Deciding whether or not to install caches
 *   2. Deciding whether or not to install
 *      application monitoring components
 *   3. Etc.
 *
 * If the decision _does_ need to be revisited,
 * then consider using `AppliesWhen` instead.  This
 * incurs a small amount of runtime overhead, but
 * allows decisions to be changed at runtime.
 */
const InstallsWhen = (
  (condition)=>
    (
      (condition())
        ? (decorator)=> decorator
        : Pass
    )
);

module.exports = exports = InstallsWhen;
