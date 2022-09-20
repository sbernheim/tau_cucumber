/** 
 * Opens a URL in the browser
 * 
 * @param {String} url - the URL to open.
 * 
 */
export default async url => {
    await browser.url(url);
}