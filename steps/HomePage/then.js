const { Then } = require('@cucumber/cucumber');
//import assert from "assert";
import verifyLinksContain from "../../support/actions/verifyLinksContain"

Then(/^[Ll]inks related to "(.*)" are shown on the results page$/, async (keyword) => {
    await verifyLinksContain(keyword);
    /*await $$(".LC20lb").forEach( async (link) => {
    //const links = await $$(".LC20lb").forEach( async (link) => {
    //await links.forEach( async (link) => {
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
    });*/
    /*links.forEach(async link => {
       const linkText = await link.getText();
       await console.log("FOUND LINK TEXT: " + linkText);
       link.isDisplayed() => 
       await console.log("LINK DISPLAYED : " + displayed);
       //if (linkText && displayed) {
       if (await linkText) {
        const lowerText = await linkText.toLowerCase();
        await console.log("FOUND LC TEXT  : " + lowerText);
        await console.log("CHECKING FOR   : " + keyword);
        await lowerText.includes(keyword) ? console.log("FOUND!") : console.log("NOPE!");
        await assert (
            await lowerText.includes(keyword),
            "Link text does not include search keyword ${keyword}! '${lowerText}'"
        );
        await console.log("DONE ASSERTING : " + linkText);
       } 
       await console.log("DONE CHECKING  : " + linkText);
    });*/
});