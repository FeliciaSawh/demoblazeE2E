import{ Page, Locator } from '@playwright/test'

export class PageLogin {

    readonly page: Page
    readonly newUserName: Locator
    readonly newPassword: Locator
    readonly signUp: Locator
    readonly nameUser: Locator
    readonly passwordUser: Locator
    readonly clickLogIn: Locator
   

   

    constructor ( page:Page ) {
        this.page = page
        this.nameUser = page.locator('#loginusername')
        this.passwordUser = page.locator('#loginpassword')
        this.clickLogIn = page.getByRole('button', {name: 'Log in'})
        this.newUserName = page.locator('#sign-username')
        this.newPassword = page.locator('#sign-password')
        this.signUp = page.getByRole('button', {name:'Sign up'})

    }

    async visit(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }


    async createUser(newuser: string, password: string){
        await this.newUserName.waitFor({state:'visible'})
        await this.newUserName.fill(newuser)

        await this.newPassword.waitFor({state:'visible'})
        await this.newPassword.fill(password)

        await this.signUp.waitFor({state:'visible'})
        await this.signUp.click()

    }

    async loginUser(username: string, password: string){
        await this.nameUser.waitFor({state:'visible'})
        await this.nameUser.fill(username)
        await this.passwordUser.waitFor({state:'visible'})
        await this.passwordUser.fill(password)
        await this.clickLogIn.waitFor({state:'visible'})
        await this.clickLogIn.click()
    }

}