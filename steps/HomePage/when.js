const { When } = require('@cucumber/cucumber');
//import { When } from "cucumber";
import search from "../../support/actions/search"

When(/^[Tt]he user enters "(.*)" into the search bar$/, async (keyword) => {
    await search(keyword);
});