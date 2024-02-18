import { Locator, Page } from '@playwright/test'
import { ItemCardComponent } from 'core/models/components/ItemCardComponent'

export class ProductsPage {
	readonly #page: Page
	readonly #productsGrid: Locator

	constructor(page: Page) {
		this.#page = page
		this.#productsGrid = this.#page.locator(
			'div.products.wrapper.grid.products-grid'
		)
	}

	async getItemCardByName(itemName: string): Promise<ItemCardComponent> {
		const itemCardLocator = new ItemCardComponent(
			this.#productsGrid.locator(
				`li.product.product-item:has(a.product-item-link:text-is("${itemName}"))`
			)
		)
		return itemCardLocator
	}

	async waitToBeVisible(): Promise<void> {
		await this.#productsGrid.waitFor({ state: 'attached' })
		await this.#productsGrid.waitFor({ state: 'visible' })
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.#productsGrid.waitFor({ state: 'detached' })
		await this.#productsGrid.waitFor({ state: 'hidden' })
	}
}
