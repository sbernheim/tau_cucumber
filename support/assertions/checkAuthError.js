import login from "../../pages/Login";
import assert from "assert";

export default async errorMessage => {
  const authErrorMessage = await login.errorMessage;
  const errText = await authErrorMessage.getText();

  assert(
    await errText.includes(errorMessage),
    `Error message, ${errText} did not match ${errorMessage}`
  );
};
