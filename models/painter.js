const Painter = function(paint){
  this.paint = [];
}

Painter.prototype.howMuchPaint = function () {
  return this.paint.length;
};

Painter.prototype.addPaint = function(paint) {
  this.paint.push(paint);
};

Painter.prototype.totalLitres = function () {

};

module.exports = Painter;
