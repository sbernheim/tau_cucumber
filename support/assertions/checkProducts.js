import catalog from "../../pages/Catalog";
import assert from "assert";

/**
 * @param {boolean} toBeFound If true, products should be present, else they should not be present
 */
export default async toBeFound => {
  const products = await catalog.products;
  console.log("FOUND PRODUCTS: " + products.length);

  if (toBeFound) {
    assert(products.length > 0, "No products were found");
  } else {
    assert(products.length === 0, "Products were found");
  }
};
