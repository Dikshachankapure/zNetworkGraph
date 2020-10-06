/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ZNetwork_Graph/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});