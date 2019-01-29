
const {expect} = require('chai');

const sinon = require('sinon');

const InstallsWhen = require('../../redecor8/InstallsWhen');



const DECORATOR_CALLED = "DECORATOR_CALLED";

// This decorator ignores `next` and replaces it
// with its own function.
const decorator = (
  (next)=>
    function() {
      return DECORATOR_CALLED;
    }
);

function f(x, y) {
  return x + y;
}


function MIDDLE_CONTEXT(f) {

  context('appliesWhen = AppliesWhen(condition)', function() {
    beforeEach(function() {
      this.installsWhen = InstallsWhen(this.condition);
    });


    context('d = installsWhen(decorator)', function() {
      beforeEach(function() {
        this.d = this.installsWhen(decorator);
      });


      context('g = d(f)', function() {
        f();
      });

    });

  });

}



describe('InstallsWhen', function() {

  context('condition is currently truthy', function() {
    beforeEach(function() {
      this.condition = sinon.stub().returns(true);
    });

    MIDDLE_CONTEXT(function() {
      it('installs the nested decorator', async function() {
        this.condition.returns(true);
        const g = this.d(f);

        expect(g).to.not.equal(f);
        expect(await g(1, 2)).to.equal(DECORATOR_CALLED);
      });
    });

  });


  context('condition is currently falsey', function() {
    beforeEach(function() {
      this.condition = sinon.stub().returns(false);
    });

    MIDDLE_CONTEXT(function() {

      it('does not install the nested decorator', async function() {
        this.condition.returns(false);
        const g = this.d(f);

        expect(g).to.equal(f);
        expect(await g(1, 2)).to.equal(3);

        this.condition.returns(true);
        expect(await g(1, 2)).to.equal(3);
      });
    });
  });



});
