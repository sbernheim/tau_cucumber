/**
 * Verify all the links contain the keyword
 * 
 * @params {Array.Object} links list of WebdriverIO objects with text contents
 * @params {String} keyword word that should be in the text of the link objects
 */
import assert from "assert";
import results from "../../pages/SearchResults"

export default async (keyword) => {
    await results.resultLinks
        .map((r) => r.getText())
        .filter((t) => t)
        .map((t) => t.trim().toLowerCase())
        .map((t) => {
            console.log("MATCH TEXT : " + t);
            assert (
                t.includes(keyword),
                "link text '" + t + "' does not include keyword '" + keyword + "'"
            );
        });
}