/**
 * Search for a keyword.
 * 
 * @param {String} keyword the word to search for
 */
import google from "../../pages/Home"

export default async (keyword) => {
    await google.search(keyword);
}