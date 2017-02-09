jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/in/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/in/test/integration/pages/App",
	"com/in/test/integration/pages/Browser",
	"com/in/test/integration/pages/Master",
	"com/in/test/integration/pages/Detail",
	"com/in/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.in.view."
	});

	sap.ui.require([
		"com/in/test/integration/NavigationJourneyPhone",
		"com/in/test/integration/NotFoundJourneyPhone",
		"com/in/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});