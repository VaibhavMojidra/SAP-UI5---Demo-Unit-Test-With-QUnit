QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
    "use strict";

    sap.ui.require([
        "com/vaibhavmojidra/unittestwithqunit/test/unit/model/formatter"
    ], () => {
        QUnit.start();
    });
});