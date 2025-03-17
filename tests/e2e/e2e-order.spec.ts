import{test, expect} from '@playwright/test'
import { Categories } from '../../page-objects/components/Categories'
import { PageLogin } from '../../page-objects/PageLogin'
import { NavBar } from '../../page-objects/components/NavBar'
import { PurchaseOrder } from '../../page-objects/PurchaseOrder'

test.describe.only('Placing an order', () => {

    let pagelogin : PageLogin
    let categories: Categories
    let navbar: NavBar
    let purchaseorder: PurchaseOrder

    test.beforeEach( async ({page}) => {

        pagelogin = new PageLogin(page)
        categories = new Categories(page)
        navbar = new NavBar(page)
        purchaseorder = new PurchaseOrder(page)

        await pagelogin.visit()

    })

    test('Adding products in the shopping cart', async ({page}) => {

        await navbar.clickNavBar('Log in')
        await pagelogin.loginUser('olivia12', 'olisawh')

        // adding the laptop

        await navbar.clickNavBar('Home')
        await categories.clickCategories('Laptops')
        await page.getByText('Sony vaio i5', {exact:true})
        await page.getByRole('link', {name: 'Add to cart'})
        await navbar.clickNavBar('Cart')

       //adding the phone

        await navbar.clickNavBar('Home')
        await categories.clickCategories('Phones')
        await page.getByLabel('Nokia lumia 1520', {exact:true})
        await page.getByRole('link', {name: 'Add to cart'})
        await navbar.clickNavBar('Cart')
             
        // purchase the order

        await page.waitForSelector('button.btn.btn-success')
        await expect(page.locator('button.btn.btn-success')).toBeVisible()
        await page.locator('button.btn.btn-success').click()

        await purchaseorder.clickPurchase('Olivia', 'USA', 'Houston', '94743663787383', 'March', '2026')
        await page.screenshot({path: 'success-order.png', fullPage:true})

    })

    
    
   
})