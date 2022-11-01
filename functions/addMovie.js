//import by

const {By} = require('selenium-webdriver')

//the function
const addMovie = async (driver) => {
    //first, select the input field
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    // select the add button
    await driver.findElement(By.xpath('//button')).click()

    //find the li element because we want to check if the movie title is added there
    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    //expect this to be true
    except(displayed).toBeTruthy()
}

module.exports = {
    addMovie
}