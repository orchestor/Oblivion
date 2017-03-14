"use strict";
var Polygons;
(function (Polygons) {
    var Polygon = (function () {
        function Polygon(point, next) {
            if (next === void 0) { next = null; }
            this.point = point;
            this.next = next;
        }
        Polygon.prototype.getPoint = function () {
            return this.point;
        };
        Polygon.prototype.getNext = function () {
            return this.next;
        };
        Polygon.prototype.hasNext = function () {
            return this.next !== null;
        };
        Polygon.prototype.setNext = function (other) {
            this.next = other;
        };
        Polygon.prototype.strFormat = function () {
            return undefined;
        };
        Polygon.prototype.type = function () {
            return "polygon";
        };
        return Polygon;
    }());
    Polygons.Polygon = Polygon;
})(Polygons = exports.Polygons || (exports.Polygons = {}));
//# sourceMappingURL=Polygon.js.map