import assert from "assert";

/**
 * @param {boolean} title expected title
 */
export default async title => {
  const foundTitle = await browser.getTitle();
  console.log("FOUND TITLE : " + foundTitle);
  assert(
    foundTitle === title,
    `Title, ${foundTitle} not equal to ${title}`
  );
};
