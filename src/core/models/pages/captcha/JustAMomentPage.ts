import { Page } from '@playwright/test'
import { ButtonElement } from 'core/models/elements/ButtonElement'
import { CheckboxElement } from 'core/models/elements/CheckboxElement'
import { InputTextElement } from 'core/models/elements/InputTextElement'

export class JustAMomentPage {
	readonly #page: Page
	readonly verifyYouAreHumanCheckbox: CheckboxElement
	readonly createAnAccountButton: ButtonElement
	readonly searchInput: InputTextElement

	constructor(page: Page) {
		this.#page = page
		this.verifyYouAreHumanCheckbox = new CheckboxElement(
			this.#page.locator('div.#challenge-stage input[type=checkbox]')
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
		await this.verifyYouAreHumanCheckbox.waitToBeVisible()
		await this.createAnAccountButton.waitToBeVisible()
		await this.searchInput.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.verifyYouAreHumanCheckbox.waitToBeNotVisible()
		await this.createAnAccountButton.waitToBeNotVisible()
		await this.searchInput.waitToBeNotVisible()
	}
}
