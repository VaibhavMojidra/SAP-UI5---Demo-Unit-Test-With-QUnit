# SAP UI5 Demo Unit Test With QUnit

Unit testing is an essential part of the software development process, and SAP UI5 applications can be tested using QUnit, a popular JavaScript testing framework. QUnit is commonly used for testing client-side code, including UI5 applications.

### Folder Structure

```
📂 webapp
  📂 controller
  📂 i18n
  📂 test
    📂 unit
      📂 model
        📄 formatter.js
      📄 unitTests.qunit.html
      📄 unitTests.qunit.js
  📂 view
  📄 index.html
  📄 Component.js
  📄 Invoices.json
  📄 manifest.json
```

### Code Explaination

Refer to [/webapp/test/unit/model/formatter.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Unit-Test-With-QUnit/blob/master/webapp/test/unit/model/formatter.js "formatter.js")

We create a new formatter.js file under webapp/test/unit/model where the unit test for the custom formatter is implemented. The formatter file that we want to test is loaded as a dependency.

oControllerMock is an object that has a method getOwnerComponent. This method returns an object that has a method getModel. The getModel method returns the oResourceModel object.

The fnIsolatedFormatter function is created by binding the myStatusText function to the oControllerMock object. The bind method creates a new function that, when called, has its this keyword set to the provided value, which is oControllerMock in this case. The fnIsolatedFormatter function is a new function that has the same functionality as the myStatusText function, but with a different this context.

By using oControllerMock as the this context for the myStatusText function, we can isolate the function from its original context and test it independently. This is useful for unit testing because it allows us to test the function in isolation without having to worry about its dependencies.

The formatter file just contains one QUnit module for our formatter function and one unit test for the formatter function. In the implementation of the statusText function, we use the translated texts when calling the formatter. As we do not want to test the UI5 binding functionality, we just use text in the test instead of a ResourceBundle.

Refer to [/webapp/test/unit/unitTests.qunit.html](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Unit-Test-With-QUnit/blob/master/webapp/test/unit/unitTests.qunit.html "unitTests.qunit.html")

The so-called QUnit test suite is an HTML page that triggers all QUnit tests for the application. Most of it is generating the layout of the result page that you can see in the preview and we won’t further explain these parts but focus on the application parts instead.

Let’s start with the namespaces. Since we are now in the webapp/test/unit folder, we actually need to go up two levels to get the webapp folder again. This namespace can be used inside the tests to load and trigger application functionality.

First, we load some basic QUnit functionality via script tags. Other QUnit tests can be added here as well. Then the HTML page loads another script called unitTests.qunit.js, which we will create next. This script will execute our formatter.

Refer to [/webapp/test/unit/unitTests.qunit.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Unit-Test-With-QUnit/blob/master/webapp/test/unit/unitTests.qunit.js "unitTests.qunit.js")

This script loads and executes our formatter. If we now open the webapp/test/unit/unitTests.qunit.html file in the browser, we should see our test running and verifying the formatter logic.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Unit-Test-With-QUnit/master/screenshot/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)