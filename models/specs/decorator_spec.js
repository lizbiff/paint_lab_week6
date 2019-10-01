const assert = require('assert');
const Paint = require('../paint.js');
const Painter = require('../painter.js');
const Room = require('../room.js');

describe('Paint', function(){
  it('should be able to check how many litres of paint', function(){
    paint = new Paint(3)
    const actual = paint.litres;
    assert.strictEqual(actual, 3)
  });
});

describe('Painter', function(){
  it('should be able to start with no paint in stock', function(){
    painter = new Painter()
    const actual = painter.paint;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add paint to the stock', function(){
    painter.addPaint(['blue'])
    const actual = painter.howMuchPaint();
    assert.deepStrictEqual(actual, 1)

  });
});

describe('Room', function(){
  it('should have an area', function(){
    room = new Room(50)
    const actual = room.area;
    assert.deepStrictEqual(actual, 50)
  })
})
