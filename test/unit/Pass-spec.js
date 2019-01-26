
const {expect} = require('chai');

const Pass = require('../../redecor8/Pass');

describe('Pass', function() {
  context('pass = Pass(...)', function() {

    beforeEach(function() {
      this.pass = Pass("whatever");
    });

    context('pass(f)', function() {

      it('returns f', function() {
        function f(x, y) {
          return x + y;
        }

        const wrapped = this.pass(f);
        expect(wrapped).to.equal(f);

        expect(f(2, 3)).to.equal(5);
      });

    });

  });

});
