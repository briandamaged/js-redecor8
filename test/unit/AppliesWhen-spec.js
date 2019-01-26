
const {expect} = require('chai');

const sinon = require('sinon');

const AppliesWhen = require('../../redecor8/AppliesWhen');

describe('AppliesWhen', function() {
  const DECORATOR_CALLED = "DECORATOR_CALLED";

  // This decorator ignores `next` and replaces it
  // with its own function.
  const decorator = (
    (next)=>
      function() {
        return DECORATOR_CALLED;
      }
  );

  context('appliesWhen = AppliesWhen(condition)', function() {

    beforeEach(function() {
      this.condition = sinon.stub().returns(false);
      this.appliesWhen = AppliesWhen(this.condition);
    });

    context('d = appliesWhen(decorator)', function() {

      beforeEach(function() {
        this.d = this.appliesWhen(decorator);
      });

      context('g = d(f)', function() {
        beforeEach(function() {
          function f(x, y) {
            return x + y;
          }

          this.g = this.d(f);
        });

        it('applies `decorator` whenever condition is truthy', async function() {
          this.condition.returns(false);
          expect(await this.g(1, 2)).to.equal(3);
          expect(await this.g(4, 5)).to.equal(9);

          this.condition.returns(true);
          expect(await this.g(1, 2)).to.equal(DECORATOR_CALLED);
          expect(await this.g(4, 5)).to.equal(DECORATOR_CALLED);

          this.condition.returns(false);
          expect(await this.g(1, 2)).to.equal(3);
          expect(await this.g(4, 5)).to.equal(9);
        });
      });

    });

  });

});
