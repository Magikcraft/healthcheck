"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
describe('@magikcraft/healthcheck.something', function () {
    it('exists', function () {
        expect(index_1.something).toBeTruthy();
    });
    it("returns 'Hello'", function () {
        var returnValue = index_1.something();
        expect(returnValue).toBe('Hello');
    });
});
