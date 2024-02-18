import { Page } from '@playwright/test'
import { ProductsActions } from 'core/actions/products/ProductsActions'
import { AccountActions } from '../actions/users/AccountActions'

export class ActionsFactory {
	readonly #page: Page

	constructor(page: Page) {
		this.#page = page
	}

	// get home() {
	//     return new HomePageActions(this.#page)
	// }

	get account() {
		return new AccountActions(this.#page)
	}

	get products() {
		return new ProductsActions(this.#page)
	}
}
