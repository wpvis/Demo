sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			}
		};

	}
);
sap.ui.define([
	], function () {
		"use strict 2";

		return {
			/**
			 * Formats date value to yyyy-MM-dd
			 *
			 * @public
			 * @param {string} Value value to be formatted
			 * @returns {string} formatted date value
			 */
			dateFormat : function (Value) {
				if (!Value) {
					return "";
				}
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd.MM.yyyy"}); 
                return oDateFormat.format(Value); 
			}
		};
	}
);