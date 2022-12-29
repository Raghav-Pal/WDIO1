describe('Google Search Test', () => {

    it('should have the right title', (async) => {
        browser.url('https://google.com/')
        search_box_element = $('[name=\'q\']')
        search_box_element.setValue("BrowserStack\n")

        expect(browser).toHaveTitle("BrowserStack - Google Search");

        //title of the launched webpage is printed in console as output

        const pagetitle = browser.getTitle()
        console.log('Title of the webpage is -' + pagetitle)
    })

})