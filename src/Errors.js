/**
 * Created by Josh on 2/17/17.
 * File which implements Errors
 * All Errors follow an interface
 */
"use strict";
var Errors;
(function (Errors) {
    var NameError = (function () {
        function NameError(name) {
            this.name = name;
        }
        NameError.prototype.type = function () {
            return "NameError";
        };
        NameError.prototype.message = function () {
            return "Name " + this.name + " not defined";
        };
        return NameError;
    }());
    Errors.NameError = NameError;
})(Errors = exports.Errors || (exports.Errors = {}));
//# sourceMappingURL=Errors.js.map