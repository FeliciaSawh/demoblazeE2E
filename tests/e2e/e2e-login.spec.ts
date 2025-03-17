import{test, expect} from '@playwright/test'
import { NavBar } from '../../page-objects/components/NavBar'
import { PageLogin } from '../../page-objects/PageLogin'

test.describe('Login functionality', () => {

     let navbar: NavBar
     let pagelogin: PageLogin

    test.beforeEach( async({page}) => {

        pagelogin = new PageLogin(page)
        navbar = new NavBar(page)
        
        await pagelogin.visit()
        
    })
 
    test('Login into account', async ({page}) => {
        
        await navbar.clickNavBar('Log in')
        await pagelogin.loginUser('olivia12', 'olisawh')

        const printLoginOk = await page.locator('.navbar.navbar-toggleable-md.bg-inverse')
        await printLoginOk.screenshot({path:'log-user.png'})

        // await page.fill('//input[@id="loginusername"]', 'olivia12')
        //await page.fill('#loginpassword', 'olisawh')
        //await page.getByRole('button', {name: 'Log in'}).click()

        //const userLogin = page.getByText('Welcome olivia12')
        // await userLogin.waitFor()
        // await expect(userLogin).toBeVisible()
    })

})