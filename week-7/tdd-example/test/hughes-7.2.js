/*
============================================
; Title:  hughes-7.2.js
; Author: Joshua Hughes
; Date:   19 September 2019
; Description: demonstrates Test driven development
;===========================================
*/

var assert = require("assert");

describe("String#split",function(){
    it("Should return an array of fruits",function(){
        assert(Array.isArray("Apple,Orange,Mango".split(',')));
    });
});