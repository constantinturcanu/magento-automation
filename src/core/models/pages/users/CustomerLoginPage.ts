import { Page } from '@playwright/test'
import { InputTextElement } from '../../elements/InputTextElement'
import { ButtonElement } from '../../elements/ButtonElement'

export class CustomerLoginPage {
	readonly #page: Page
	readonly emailInput: InputTextElement
	readonly passwordInput: InputTextElement
	readonly signInButton: ButtonElement
	readonly createAnAccountButton: ButtonElement

	constructor(page: Page) {
		this.#page = page
		this.emailInput = new InputTextElement(
			this.#page.locator('input#email')
		)
		this.passwordInput = new InputTextElement(
			this.#page.locator('input#pass')
		)
		this.signInButton = new ButtonElement(
			this.#page.locator('button#send2')
		)
		this.createAnAccountButton = new ButtonElement(
			this.#page.locator('button#send2')
		)
	}

	async waitToBeVisible(): Promise<void> {
		await this.emailInput.waitToBeVisible()
		await this.passwordInput.waitToBeVisible()
		await this.signInButton.waitToBeVisible()
		await this.createAnAccountButton.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.emailInput.waitToBeNotVisible()
		await this.passwordInput.waitToBeNotVisible()
		await this.signInButton.waitToBeNotVisible()
		await this.createAnAccountButton.waitToBeNotVisible()
	}
}
