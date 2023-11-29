sap.ui.define([
    'com/vaibhavmojidra/unittestwithqunit/model/formatter',
    'sap/ui/model/resource/ResourceModel'
], function (formatter, ResourceModel) {
    'use strict';
    QUnit.module("Formatting functions", {});
    QUnit.test("Should return the translated texts", (assert) => {
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("com/vaibhavmojidra/unittestwithqunit/i18n/i18n.properties"),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });
        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                }
            }
        }
        const fnIsolatedFormatter = formatter.myStatusText.bind(oControllerMock);
        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for Status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for Status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for Status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for Status Foo is correct");
    });
});