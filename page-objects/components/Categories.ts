import {Page, Locator} from '@playwright/test'

export class Categories {
    readonly page: Page
    readonly phoneLink: Locator
    readonly laptopLink: Locator
    readonly monitorsLink: Locator

    constructor (page:Page){
        this.page = page
        this.phoneLink = page.getByText('Phones', {exact:true})
        this.laptopLink = page.getByText('Laptops', {exact:true})
        this.monitorsLink = page.getByText('Monitors', {exact:true})
    }

    async clickCategories(catName){
        switch(catName){
            case "Phones":
                await this.phoneLink.click()
                break
            case "Laptops":
                await this.laptopLink.click()
                break
            case "Monitors":
                await this.monitorsLink.click()
                break
            default:
                throw  new Error('Category not found..')            
        }
    }
}