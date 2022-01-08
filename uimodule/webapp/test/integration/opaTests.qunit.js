/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["pin/org/confirmButton/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
