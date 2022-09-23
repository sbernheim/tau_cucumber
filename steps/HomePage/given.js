const { Given } = require('@cucumber/cucumber');
import goToUrl from "../../support/actions/goToUrl"
import google from "../../pages/Home"

Given("a web browser is at the Google home page", async () => {
  await goToUrl(google.url);
});
