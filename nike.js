const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(stealthPlugin());

var finishline = async function(){
    const browser = await puppeteer.launch({headless: false});
    const page = await  browser.newPage();
    await page.setViewport({ width: 800, height: 600 })
    await page.goto('https://www.nike.com/vn/t/air-force-1-07-shoe-tnM0q0/DJ2739-100')

    // size
    await page.type('input[value="26073158:9"]', "EU 47", e => e.click());
    
    //  add to card
    await page.click('button[class="ncss-btn-primary-dark btn-lg add-to-cart-btn"]', e => e.click())
   

    //  view cart

    // await page.click('a[data-type="click_navCart"]', e => e.click())
}
finishline()
