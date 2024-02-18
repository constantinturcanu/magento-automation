import { Locator } from '@playwright/test'

export class InputTextElement {
	readonly #locator: Locator

	constructor(locator: Locator) {
		this.#locator = locator
	}

	get locator(): Locator {
		return this.#locator
	}

	async fill(text: string): Promise<void> {
		await this.#locator.fill(text)
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
