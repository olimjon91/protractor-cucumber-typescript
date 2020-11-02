/**
 * Created by trphq47 on 11/2/20.
 */
import {defineSupportCode} from "cucumber";
import {browser, element, by} from "protractor";


defineSupportCode(function ({When, setDefaultTimeout}) {
    setDefaultTimeout(90 * 10000);

    When(/^Start protractor test$/, async() => {
        await browser.get("https://google.com");
        let el = await element(by.name('q'));
        await el.sendKeys('Hello google');
    });

});
