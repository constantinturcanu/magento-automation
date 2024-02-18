import { Locator } from '@playwright/test'

export class CheckboxElement {
	readonly #locator: Locator

	constructor(locator: Locator) {
		this.#locator = locator
	}

	async check(): Promise<void> {
		await this.#locator.check()
	}

	async uncheck(): Promise<void> {
		await this.#locator.uncheck()
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
