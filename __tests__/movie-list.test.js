// we are going to start with the BOILERPLATE code

const {Builder,Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


//input the functions I want to test

const {addMovie} = require('../functions/addMovie')

// Then let's add the beforeAll and afterAll

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// The test
test('add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(5000)
})
