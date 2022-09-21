const { Then } = require('@cucumber/cucumber');
//import { Then } from 'cucumber';
import checkNoResultsError from "../../support/assertions/checkNoResultsError";
import checkProducts from "../../support/assertions/checkProducts";
import checkProductsContain from "../../support/assertions/checkProductsContain";
import checkTitle from "../../support/assertions/checkTitle";

Then("a no results error message is shown", async () => {
  await checkNoResultsError();
});

Then(/^(no )?products are listed$/, async notListed => {
  if (notListed) {
    await checkProducts(false);
  } else {
    await checkProducts(true);
  }
});

Then(/^search results show products related to "(.*)"$/, async keyword => {
  await checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, async title => {
  await checkTitle(title);
});
