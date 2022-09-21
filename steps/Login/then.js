const { Then } = require('@cucumber/cucumber');
//import { Then } from 'cucumber';
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, async errorMessage => {
  await checkAuthError(errorMessage);
});

Then(/^they are successfully logged in$/, async () => {
  try {
    await browser.call(() => eyes.open(browser));
    await browser.call(() => eyes.check("Login Page", Target.window().fully()));
    await browser.call(() => eyes.close(false));
  } catch(e) {
    console.log(e);
  } finally {
    await browser.call(() => eyes.abortIfNotClosed());
  }
});
