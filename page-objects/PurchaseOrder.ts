import{Page, Locator} from '@playwright/test'

export class PurchaseOrder{
    readonly page: Page
    readonly namePerson: Locator
    readonly country: Locator
    readonly city: Locator
    readonly card: Locator
    readonly month: Locator
    readonly year: Locator
    readonly purchaseButton: Locator

    constructor(page:Page){
        this.page = page
        this.namePerson = page.locator('#name')
        this.country = page.locator('#country')
        this.city = page.locator('#city')
        this.card = page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')
        this.purchaseButton = page.getByRole('button', {name: /purchase/i})
    }

    async clickPurchase (namePerson: string, country: string, city: string, card: string, month: string, year: string){
        await this.namePerson.fill(namePerson)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.card.fill(card)
        await this.month.fill(month)
        await this.year.fill(year)
        await this.purchaseButton.click()
    }
}