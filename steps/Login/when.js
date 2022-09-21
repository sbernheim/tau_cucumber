const { When } = require('@cucumber/cucumber');
//import { When } from 'cucumber';
import signIn from "../../support/actions/signIn";

When(
  /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/,
  async (valid, email) => {
    await signIn(valid === "valid" ? true : false, email);
  }
);
