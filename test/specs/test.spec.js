
describe('My 1st group of tests', () => {

    it('My 1st Test', async () => {

        browser.url('https://google.com/')
        browser.pause(2000)
        await $('[name="q"]').setValue("WedbriverIO");
        // search_box_element = await $('[name=\'q\']')
        browser.pause(2000)
        // await search_box_element.setValue("BrowserStack\n")
        // await $('button[type="submit"]').click();
        browser.keys('Enter')
        browser.pause(4000)

        // await browser.url('https://google.com')
        // // browser.pause(8000)
        // await $('[name="q"]').setValue("WedbriverIO");
        // // await $('q').setValue("WedbriverIO");


    })
})