import home from "../../pages/Home";
import login from "../../pages/Login";

export default async page => {
  switch (page) {
    case "Home":
      await browser.url(home.url);
      break;
    case "Login":
      await browser.deleteCookies();
      await browser.url(login.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};
