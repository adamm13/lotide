const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns 5 for [5, 5]", () => {
    assert.deepEqual(tail([5, 5, 4, 5]), 5);
  });

  it("returns 'labs' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), 'labs');
  });


});