import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await driver.sleep(1000);
    await button.click();
    await driver.sleep(1000);
    
});

test('Clicking the upper left square adds an X to the square', async () => {
    let cellZero = await driver.findElement(By.id('cell-0'))

    await driver.sleep(1500);
    await cellZero.click();
    await driver.sleep(1500);
})

test('Clicking the upper right square adds an X to the square', async () => {
    let cellTwo = await driver.findElement(By.id('cell-2'))

    await driver.sleep(1500);
    await cellTwo.click();
    await driver.sleep(1500);
})

test('Clicking the lower right square adds an X to the square', async () => {
    let cellEight = await driver.findElement(By.id('cell-8'))

    await driver.sleep(1500);
    await cellEight.click();
    await driver.sleep(1500);
})