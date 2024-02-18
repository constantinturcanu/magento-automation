import { Locator } from '@playwright/test'

export class ButtonElement {
	readonly #locator: Locator

	constructor(locator: Locator) {
		this.#locator = locator
	}

	get locator(): Locator {
		return this.#locator
	}

	async click(): Promise<void> {
		await this.#locator.click()
	}

	async hover(): Promise<void> {
		await this.#locator.hover()
	}

	async waitToBeVisible(): Promise<void> {
		await this.#locator.waitFor({ state: 'attached' })
		await this.#locator.waitFor({ state: 'visible' })
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.#locator.waitFor({ state: 'detached' })
		await this.#locator.waitFor({ state: 'hidden' })
	}
}
