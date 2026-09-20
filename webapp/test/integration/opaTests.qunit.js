/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/styker/graphshipment/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
