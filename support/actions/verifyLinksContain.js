/**
 * Verify all the links contain the keyword
 * 
 * @params {Array.Object} links list of WebdriverIO objects with text contents
 * @params {String} keyword word that should be in the text of the link objects
 */
import assert from "assert";
import results from "../../pages/SearchResults"

export default async (links, keyword) => {
    await results.searchResultsLinks.forEach( async (link) => {
        const linkText = await link.getText();
        console.log("LINK TEXT  : " + linkText);
        if (linkText) {
            const lowerText = await linkText.toLowerCase();
            console.log("LOWER TEXT : " + lowerText);
            assert (
                lowerText.includes(keyword),
                "link text '" + lowerText + "' does not include keyword '" + keyword + "'"
            );
        }
    });

}