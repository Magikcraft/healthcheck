"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("@magikcraft/healthcheck/lib/log");
var http = require('http');
var log = log_1.Logger(__filename);
log('@magikcraft/healthcheck loaded!');
// Healthchecks.io
var DEFAULT_PERIOD = 15 * 60 * 1000; // 15 minutes
var HEALTHCHECKS_IO_ID = java.lang.System.getenv('HEALTHCHECKS_IO_ID');
var HEALTHCHECKS_IO_PERIOD = java.lang.System.getenv('HEALTHCHECKS_IO_PERIOD') || DEFAULT_PERIOD;
log("" + { HEALTHCHECKS_IO_ID: HEALTHCHECKS_IO_ID });
if (HEALTHCHECKS_IO_ID) {
    var url_1 = "https://hc-ping.com/" + HEALTHCHECKS_IO_ID;
    var get = function () {
        return http.request({ method: 'GET', url: url_1 }, function (resCode, _) {
            return log("Healthcheck response: " + resCode);
        });
    };
    log("Registering healthcheck for " + url_1 + " every " + HEALTHCHECKS_IO_PERIOD /
        60 /
        1000 + " minutes");
    get();
    setInterval(get, HEALTHCHECKS_IO_PERIOD);
}
