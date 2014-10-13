(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function DuxcaTest(value) { // @arg Number|Integer = 0 comment
//{@dev
  //$args(DuxcaTest, arguments);
  //$valid($type(value, "Number|Integer|omit"), DuxcaTest, "value");
//}@dev

    this._value = value || 0;
}

//{@dev
DuxcaTest["repository"] = "https://github.com/duxca/DuxcaTest.js"; // GitHub repository URL. http://git.io/Help
//}@dev

DuxcaTest["prototype"] = {
    "constructor":  DuxcaTest,           // new DuxcaTest(value:Number|Integer):DuxcaTest
    "value":        DuxcaTest_value,     // DuxcaTest#value():Number/Integer
    "isNumber":     DuxcaTest_isNumber,  // DuxcaTest#isNumber():Boolean
    "isInteger":    DuxcaTest_isInteger  // DuxcaTest#isInteger():Boolean
};

/*
class Xyz extends DuxcaTest { ... }

Xyz["prototype"] = Object.create(DuxcaTest.prototype, {
    "constructor":  { "value": Xyz },
    "value":        { "value": Xyz_value },
    "isNumber":     { "value": Xyz_isNumber },
    "isInteger":    { "value": Xyz_isInteger },
});
 */

// --- implements ------------------------------------------
function DuxcaTest_value() { // @ret Number|Integer comment
    return this._value;
}

function DuxcaTest_isNumber() { // @ret Boolean comment
    return typeof this._value === "number";
}

function DuxcaTest_isInteger() { // @ret Boolean comment
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = DuxcaTest;
}
global["DuxcaTest" in global ? "DuxcaTest_" : "DuxcaTest"] = DuxcaTest; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

