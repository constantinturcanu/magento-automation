import { Page } from '@playwright/test'
import { MenuBar } from 'core/models/menu/MenuBar'
import { ProductsPage } from 'core/models/pages/products/ProductsPage'
import { WomenProductsCategories } from 'core/models/unions/WomenProductsCategories'

export class ProductsActions {
	readonly #page: Page

	constructor(page: Page) {
		this.#page = page
	}

	async browseProducts(parameters: {
		category: WomenProductsCategories
		productName: string
	}): Promise<void> {
		console.log(
			`Browse for product "${parameters.productName}" in category "${parameters.category}"`
		)
		const menuBar = new MenuBar(this.#page)
		await menuBar.waitToBeVisible()
		if (parameters.category === 'Women') {
			await menuBar.womenButton.click()

		}
		const productsPage = new ProductsPage(this.#page)
		await productsPage.waitToBeVisible()
		const itemCard = await productsPage.getItemCardByName(
			parameters.productName
		)
		await itemCard.waitToBeVisible()
		await itemCard.click()
	}
}
