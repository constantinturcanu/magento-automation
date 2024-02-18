import { Page } from '@playwright/test'
import { ButtonElement } from '../../elements/ButtonElement'

export class MyAccountPage {
	readonly #page: Page
	readonly myAccountButton: ButtonElement
	readonly myOrdersButton: ButtonElement
	readonly myDownloadableProductsButton: ButtonElement
	readonly myWishListButton: ButtonElement
	readonly addressBookButton: ButtonElement
	readonly accountInformationButton: ButtonElement
	readonly storedPaymentMethodsButton: ButtonElement
	readonly myProductReviewsButton: ButtonElement
	readonly newsletterSubscriptionsButton: ButtonElement

	constructor(page: Page) {
		this.#page = page
		this.myAccountButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("My Account")')
		)
		this.myOrdersButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("My Orders")')
		)
		this.myDownloadableProductsButton = new ButtonElement(
			this.#page.locator(
				'li.nav.item:text-is("My Downloadable Products")'
			)
		)
		this.myWishListButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("My Wish List")')
		)
		this.addressBookButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("Address Book")')
		)
		this.accountInformationButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("Account Information")')
		)
		this.storedPaymentMethodsButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("Stored Payment Methods")')
		)
		this.myProductReviewsButton = new ButtonElement(
			this.#page.locator('li.nav.item:text-is("My Product Reviews")')
		)
		this.newsletterSubscriptionsButton = new ButtonElement(
			this.#page.locator(
				'li.nav.item:text-is("Newsletter Subscriptions")'
			)
		)
	}

	async waitToBeVisible(): Promise<void> {
		await this.myAccountButton.waitToBeVisible()
		await this.myOrdersButton.waitToBeVisible()
		await this.myDownloadableProductsButton.waitToBeVisible()
		await this.myWishListButton.waitToBeVisible()
		await this.addressBookButton.waitToBeVisible()
		await this.accountInformationButton.waitToBeVisible()
		await this.storedPaymentMethodsButton.waitToBeVisible()
		await this.myProductReviewsButton.waitToBeVisible()
		await this.newsletterSubscriptionsButton.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.myAccountButton.waitToBeNotVisible()
		await this.myOrdersButton.waitToBeNotVisible()
		await this.myDownloadableProductsButton.waitToBeNotVisible()
		await this.myWishListButton.waitToBeNotVisible()
		await this.addressBookButton.waitToBeNotVisible()
		await this.accountInformationButton.waitToBeNotVisible()
		await this.storedPaymentMethodsButton.waitToBeNotVisible()
		await this.myProductReviewsButton.waitToBeNotVisible()
		await this.newsletterSubscriptionsButton.waitToBeNotVisible()
	}
}
