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
    
    test('Create new user', async ({page}) => {
        
        await navbar.clickNavBar('Sign up')
        await pagelogin.createUser('olivia12', 'olisawh')
        await page.waitForTimeout(1000)
        await page.screenshot({path: 'new-user.png', fullPage:true})

        //await  page.fill('#sign-username', 'olivia12')
        //await page.fill('#sign-password', 'olisawh')
        //await page.getByRole('button', {name:'Sign up'}).click()
       
    })
    

})