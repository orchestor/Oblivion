"use strict";
/**
 * Created by Josh on 3/12/17.
 */
var Points;
(function (Points) {
    var Point = (function () {
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Point.prototype.type = function () {
            return "point";
        };
        Point.prototype.strFormat = function () {
            return this.x + "," + this.y;
        };
        Point.prototype.innerValue = function () {
            return [this.x, this.y];
        };
        Point.prototype.setItem = function (index, value) {
            if (index in this) {
                if (typeof value !== 'number')
                    throw new Error("Points can only hold numbers.");
                this[index] = value;
                return new Point(this.x, this.y);
            }
            else
                throw new Error("Index " + index + " not supported by Point.");
        };
        Point.prototype.hasItem = function (item) {
            return false;
        };
        Point.prototype.getItem = function (index) {
            if (index in this)
                return this[index];
            else
                throw new Error("Index " + index + " not supported by Point.");
        };
        Point.prototype.arrayValue = function () {
            return [this.x, this.y];
        };
        Point.prototype.size = function () {
            return 2;
        };
        return Point;
    }());
    Points.Point = Point;
})(Points = exports.Points || (exports.Points = {}));
//# sourceMappingURL=Point.js.map