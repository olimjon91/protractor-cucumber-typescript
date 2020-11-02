import {browser} from "protractor";

const yaml = require('js-yaml');
const fs = require('fs');
const {After, Status, Before, defineSupportCode} = require("cucumber");
const devices: String = browser.params.devices

Before({timeout: 30 * 5000}, async() => {

    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes('data')) {
        await browser.restart();
        await browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(50000)
        await browser.sleep(5000);
    }

});


After({timeout: 10 * 5000}, async() => {

});


'use strict';

if (devices == 'no') {
    defineSupportCode(({After}) => {
        After(async function (testCase) {
            if (testCase.result.status === Status.FAILED) {
                // Log the spec to the console for protractor-flake to be able to rerun the failed specs
                try {
                    await browser.executeScript("document.body.style.zoom='80%'")
                } catch (err) {
                    console.log(err + ' error in after steps hooks lone 76')
                }
                console.log('Specs:', testCase.sourceLocation.uri);
                const screenShot = await browser.takeScreenshot();
                this.attach(screenShot, "image/png");
            }
            return Promise.resolve();
        });
    });
}
