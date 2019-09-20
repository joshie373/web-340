/*
============================================
; Title:  hughes-7.3.js
; Author: Joshua Hughes
; Date:   19 September 2019
; Description: Demonstrations mocha and chai
;===========================================
*/

var fruits = require("../hughes-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){
    it("Should return an array of fruits", function(){
        var f = fruits("Apple,Mango,Orange");
        assert(Array.isArray(f));
    });
});