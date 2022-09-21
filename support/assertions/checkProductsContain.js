import catalog from "../../pages/Catalog";
import assert from "assert";

/**
 * @param {boolean} keyword search term to be present
 */
export default async keyword => {
  // This await statement covers the entire chain map statements!
  await catalog.products.map((p) => p.getText()).map((t) => {
    assert(
      t != undefined,
      "Product element text is undefined!"
    );
    return t.trim().toLowerCase();
  }).map((m) => {
    assert(
      m.includes(keyword.toLowerCase()),
      `Product ${m} does not contain ${keyword}`
    )
  });
};
