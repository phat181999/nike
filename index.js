const puppeteer = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(stealthPlugin());

const selectors = [
  'div[class$="css-6j0qrh e1ymk98u0"] article .disabled disabled css-1ky1h7x-PrimaryDarkButton-buttonPaddingBorderRadiusStyles-disabledButtonStyles-primaryDisabledStyles-primaryDarkButtonStyles e16pwdtm0 button'
];

var finishline = async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });
  await page.goto(
    "https://www.nike.com/t/air-vapormax-2021-fk-mens-shoes-NpTfFz/DH4084-001"
  );
  // try{

    await page.type('input[id="skuAndSize__26149638"]', "EU 41", (e) => e.click());

    await page.click('button[class="ncss-btn-primary-dark btn-lg add-to-cart-btn"]', (e) => e.click());

    await page.goto("https://www.nike.com/vn/cart");
    await page.click(
      'button[class=" css-1hq61g3-PrimaryDarkButton-buttonPaddingBorderRadiusStyles-disabledButtonStyles-primaryDisabledStyles-primaryDarkButtonStyles ezigbjr0"]',
      (e) => e.click()
    );
    await page.waitForTimeout(1000);
    const button = await page.$(selector);
    await button.click();
    // await page.click(
    //  'button[class=" css-1ky1h7x-PrimaryDarkButton-buttonPaddingBorderRadiusStyles-disabledButtonStyles-primaryDisabledStyles-primaryDarkButtonStyles e16pwdtm0"]',
    //  (e) => e.click()
    // )
    // checkout
    // await page.waitForTimeout(1000);
    // await page.type('input[id="firstName"]','Tấn Phát')
    // await page.type('input[id="lastName"]','Hồ')
    // await page.type('input[id="search-address-input"]','BR-VT')
    // await page.type('input[id="search-address-input"]','BR-VT')
    // await page.type('input[id="email"]','demo@gmail.com')
    // await page.type('input[id="phoneNumber"]','123123123123')
  // }
  // catch(err){
  //   await browser.close()
  //   console.log(err);
  // }
  
};
finishline();
