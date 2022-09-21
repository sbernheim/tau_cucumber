import login from "../../pages/Login";
import credentials from "../../data/credentials";

export default async (isValid, email) => {
  const password = isValid
    ? credentials.find(creds => creds.email === email).password
    : "randomPassword";

  await login.signIn(email, password);
  const cookies = await browser.getCookies();
  console.log("COOKIES : " + cookies);
  await cookies.forEach( cookie => {
    console.log("COOKIE  : " + cookie);
  });
};
