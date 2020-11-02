/********************************************************************************************************************************************
 * Author: Olimjon Berdiev
 * Date of creation: 11/02/2020
 * Version: 1.0
 *********************************************************************************************************************************************/

import {browser, Config} from "protractor";
import {Reporter} from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

// ###### PROTRACTOR CONFIGURATION ######
//This date is used to correct local time with global
//If you time is correct you can comment this
var t = (new Date().getTime() - 4 * 3600 * 1000)
var date = new Date(t).toLocaleString()

export const config: Config = {

    seleniumAddress: "http://use your ip here/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        unexpectedAlertBehaviour: 'accept',
        shardTestFiles: true,
        maxInstances: 8,
        'goog:chromeOptions': {
            'w3c': false,
            args: [
                //'--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--incognito',
                '--disable-dev-shm-usage'
            ]

        }
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature"
    ],

    params: {
        screenshot: "no",
        devices: "no"
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:reports/json/cucumber_report.json",
        require: [
            "../../step_definitions/*.ts",
            "../../support/*.ts"
        ],
        strict: true,
        defaultTimeoutInterval: 30000
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            reportName: 'UI-Automation HTML Report',
            customData: {
                title: 'UI-Automation run',
                data: [
                    {label: 'Project', value: 'protractor-cucumber-typescript'},
                    {label: 'Executed at', value: date},
                    {label: 'Browser', value: 'Chrome'},
                    {label: 'Platform', value: 'Desktop'},
                    {label: 'Author', value: 'Olimjon Berdiev'}
                ]
            }
        }
    }],
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(50000)
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    }

};
