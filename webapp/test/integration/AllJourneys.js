jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZC4C_KLANTSet in the list
// * All 3 ZC4C_KLANTSet have at least one ZC4C_FACTUUR_HSet

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
		"com/in/test/integration/MasterJourney",
		"com/in/test/integration/NavigationJourney",
		"com/in/test/integration/NotFoundJourney",
		"com/in/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});