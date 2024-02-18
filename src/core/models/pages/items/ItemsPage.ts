import { Locator, Page } from '@playwright/test'

export class ProductsPage {
	readonly #page: Page
	readonly #productInfoMainDiv: Locator

	constructor(page: Page) {
		this.#page = page
		this.#productInfoMainDiv = this.#page.locator('div.product-info-main')
	}

	async waitToBeVisible(): Promise<void> {
		await this.#productInfoMainDiv.waitFor({ state: 'attached' })
		await this.#productInfoMainDiv.waitFor({ state: 'visible' })
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.#productInfoMainDiv.waitFor({ state: 'detached' })
		await this.#productInfoMainDiv.waitFor({ state: 'hidden' })
	}
}
