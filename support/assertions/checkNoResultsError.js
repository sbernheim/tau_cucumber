import catalog, { noResultsErrorMessage } from "../../pages/Catalog";
import assert from "assert";

export default async () => {
  const noResultErrorMessage = await catalog.noResultsErrorMessage;
  console.log("NO RESULTS ERROR MESSAGE: " + noResultErrorMessage);
  assert(
    noResultErrorMessage !== undefined,
    "No results error message was not found!"
  );
  const errText = await noResultErrorMessage.getText();
  console.log("NO RESULTS ERROR TEXT   : " + errText);

  const expectedText = "No results were found for your search"; 
  assert(
    errText.includes(expectedText),
    "No results error message '" + errText + "' did not contain '" + expectedText + "'"
  );
};
