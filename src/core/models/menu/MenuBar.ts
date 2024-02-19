import { Locator, Page } from '@playwright/test'
import { ButtonElement } from 'core/models/elements/ButtonElement'

export class MenuBar {
	readonly #page: Page
	readonly #storeMenuBar: Locator
	readonly womenButton: ButtonElement
	readonly womenTopsButton: ButtonElement
	readonly menButton: ButtonElement
	readonly gearButton: ButtonElement
	readonly trainingButton: ButtonElement
	readonly saleButton: ButtonElement

	constructor(page: Page) {
		this.#page = page
		this.#storeMenuBar = this.#page.locator(`div[id='store.menu']`)
		this.womenButton = new ButtonElement(
			this.#storeMenuBar.locator('a:has(span:text-is("Women"))')
		)
		this.womenTopsButton = new ButtonElement(
			this.#storeMenuBar.locator('a#ui-id-8:has(span:text-is("Tops"))')
		)
		this.menButton = new ButtonElement(
			this.#storeMenuBar.locator('a:has(span:text-is("Men"))')
		)
		this.gearButton = new ButtonElement(
			this.#storeMenuBar.locator('a:has(span:text-is("Gear"))')
		)
		this.trainingButton = new ButtonElement(
			this.#storeMenuBar.locator('a:has(span:text-is("Training"))')
		)
		this.saleButton = new ButtonElement(
			this.#storeMenuBar.locator('a:has(span:text-is("Sale"))')
		)
	}

	async waitToBeVisible(): Promise<void> {
		await this.womenButton.waitToBeVisible()
		await this.menButton.waitToBeVisible()
		await this.gearButton.waitToBeVisible()
		await this.trainingButton.waitToBeVisible()
		await this.saleButton.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.womenButton.waitToBeNotVisible()
		await this.menButton.waitToBeNotVisible()
		await this.gearButton.waitToBeNotVisible()
		await this.trainingButton.waitToBeNotVisible()
		await this.saleButton.waitToBeNotVisible()
	}
}
