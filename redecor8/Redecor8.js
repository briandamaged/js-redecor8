
const Redecor8 = (
  (decorator)=>
    function redecor8(target, name, descriptor) {
      descriptor.value = decorator(descriptor.value);
      return descriptor;
    }
);

module.exports = exports = Redecor8;
