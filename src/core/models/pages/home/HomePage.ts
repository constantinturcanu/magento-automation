import { Page } from '@playwright/test'
import { ButtonElement } from 'core/models/elements/ButtonElement'
import { InputTextElement } from 'core/models/elements/InputTextElement'

export class HomePage {
	readonly #page: Page
	readonly signInButton: ButtonElement
	readonly createAnAccountButton: ButtonElement
	readonly searchInput: InputTextElement

	constructor(page: Page) {
		this.#page = page
		this.signInButton = new ButtonElement(
			this.#page.locator(
				'header.page-header ul.header.links a:text-is("Sign In")'
			)
		)
		this.createAnAccountButton = new ButtonElement(
			this.#page.locator(
				'header.page-header ul.header.links a:text-is("Create an Account")'
			)
		)
		this.searchInput = new InputTextElement(
			this.#page.locator('input#search')
		)
	}

	async waitToBeVisible(): Promise<void> {
		await this.signInButton.waitToBeVisible()
		await this.createAnAccountButton.waitToBeVisible()
		await this.searchInput.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.signInButton.waitToBeNotVisible()
		await this.createAnAccountButton.waitToBeNotVisible()
		await this.searchInput.waitToBeNotVisible()
	}
}
