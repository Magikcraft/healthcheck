"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("@magikcraft/healthcheck/lib/log");
var http_1 = require("http");
var log = log_1.Logger(__filename);
log('@magikcraft/healthcheck loaded!');
// Healthchecks.io
var DEFAULT_PERIOD = 15 * 60 * 1000; // 15 minutes
var HEALTHCHECKS_IO_URL = java.lang.System.getenv('HEALTHCHECKS_IO_URL');
var HEALTHCHECKS_IO_PERIOD = java.lang.System.getenv('HEALTHCHECKS_IO_PERIOD') || DEFAULT_PERIOD;
if (HEALTHCHECKS_IO_URL) {
    log("Registering healthcheck for " + HEALTHCHECKS_IO_URL);
    http_1.default.get(HEALTHCHECKS_IO_URL);
    setInterval(function () { return http_1.default.get(HEALTHCHECKS_IO_URL); }, HEALTHCHECKS_IO_PERIOD);
}
