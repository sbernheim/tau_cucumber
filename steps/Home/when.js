const { When } = require('@cucumber/cucumber');
//import { When } from 'cucumber';
import search from "../../support/actions/search";
import clickMenuOption from "../../support/actions/clickMenuOption";

When(/^the user searches for "(.*)"$/, async keyword => {
  await search(keyword);
});

When(/^the user clicks on the "(.*)" option in the menu$/, async option => {
  await clickMenuOption(option);
});
