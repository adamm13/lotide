const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns 4 for [5, 5, 4, 5, 1]", () => {
    assert.deepEqual(middle([5, 5, 4, 5, 1]), [4]);
  });

  it("returns 'lighthouse' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(middle(['hello', 'lighthouse', 'labs']), ['lighthouse']);
  });


});