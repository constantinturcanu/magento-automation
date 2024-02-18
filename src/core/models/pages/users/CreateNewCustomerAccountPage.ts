import { Page } from '@playwright/test'
import { ButtonElement } from '../../elements/ButtonElement'
import { InputTextElement } from '../../elements/InputTextElement'
import { CheckboxElement } from '../../elements/CheckboxElement'

export class CreateNewCustomerAccountPage {
	readonly #page: Page
	readonly firstNameInput: InputTextElement
	readonly lastNameInput: InputTextElement
	readonly signUpForNewsletterCheckbox: CheckboxElement
	readonly allowRemoteShoppingAssistanceCheckbox: CheckboxElement
	readonly emailInput: InputTextElement
	readonly passwordInput: InputTextElement
	readonly confirmPasswordInput: InputTextElement
	readonly createAnAccountButton: ButtonElement

	constructor(page: Page) {
		this.#page = page
		this.firstNameInput = new InputTextElement(
			this.#page.locator('input#firstname')
		)
		this.lastNameInput = new InputTextElement(
			this.#page.locator('input#lastname')
		)
		this.signUpForNewsletterCheckbox = new CheckboxElement(
			this.#page.locator('input#is_subscribed')
		)
		this.allowRemoteShoppingAssistanceCheckbox = new CheckboxElement(
			this.#page.locator('input#assistance_allowed_checkbox')
		)
		this.emailInput = new InputTextElement(
			this.#page.locator('input#email_address')
		)
		this.passwordInput = new InputTextElement(
			this.#page.locator('input#password')
		)
		this.confirmPasswordInput = new InputTextElement(
			this.#page.locator('input#password-confirmation')
		)
		this.createAnAccountButton = new ButtonElement(
			this.#page.locator('button:has(span:text-is("Create an Account"))')
		)
	}

	async waitToBeVisible(): Promise<void> {
		await this.firstNameInput.waitToBeVisible()
		await this.lastNameInput.waitToBeVisible()
		await this.signUpForNewsletterCheckbox.waitToBeVisible()
		await this.allowRemoteShoppingAssistanceCheckbox.waitToBeVisible()
		await this.emailInput.waitToBeVisible()
		await this.passwordInput.waitToBeVisible()
		await this.confirmPasswordInput.waitToBeVisible()
		await this.createAnAccountButton.waitToBeVisible()
	}

	async waitToBeNotVisible(): Promise<void> {
		await this.firstNameInput.waitToBeNotVisible()
		await this.lastNameInput.waitToBeNotVisible()
		await this.signUpForNewsletterCheckbox.waitToBeNotVisible()
		await this.allowRemoteShoppingAssistanceCheckbox.waitToBeNotVisible()
		await this.emailInput.waitToBeNotVisible()
		await this.passwordInput.waitToBeNotVisible()
		await this.confirmPasswordInput.waitToBeNotVisible()
		await this.createAnAccountButton.waitToBeNotVisible()
	}
}
