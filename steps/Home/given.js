const { Given } = require('@cucumber/cucumber');
//import { Given } from 'cucumber';
import goToPage from "../../support/actions/goToPage";

Given(/^the browser is at the "(Home|Login)" page$/, async page => {
  await goToPage(page);
});
