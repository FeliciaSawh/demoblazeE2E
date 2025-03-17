import { Page, Locator} from '@playwright/test'

export class NavBar {
    readonly page: Page
    readonly signUpLink: Locator
    readonly logInLink: Locator
    readonly cartLink: Locator
    readonly aboutUsLink: Locator
    readonly contactLink: Locator
    readonly homeLink: Locator

    constructor ( page:Page ) {
        this.page = page
        this.signUpLink = page.getByRole('link', {name:'Sign up'})
        this.logInLink = page.getByRole('link', {name:'Log in'})
        this.cartLink = page.getByRole('link', {name:'Cart'})
        this.aboutUsLink = page.getByRole('link', {name:'About us'})
        this.contactLink = page.getByRole('link', {name:'Contact'})
        this.homeLink = page.getByRole('link', {name:'Home'})
    }

    async clickNavBar(tabName){
        switch(tabName){
            case "Sign up":
                await this.signUpLink.click()
            break
            case "Log in":
                await this.logInLink.click()
                break
            case "Cart": 
                await this.cartLink.click()
                break  
            case "About us":
                await this.aboutUsLink.click()
            case "Contact":
                await this.contactLink.click()
            case "Home":
                await this.homeLink.click()
                break
            default:
                throw new Error ('This tab do not exist..')

        }

    }
}