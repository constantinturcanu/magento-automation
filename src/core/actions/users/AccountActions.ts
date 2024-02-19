import { Page } from '@playwright/test'
import { HomePage } from '../../models/pages/home/HomePage'
import { CreateNewCustomerAccountPage } from '../../models/pages/users/CreateNewCustomerAccountPage'
import { CustomerLoginPage } from 'core/models/pages/users/CustomerLoginPage'
import { MyAccountPage } from 'core/models/pages/users/MyAccountPage'
import { absoluteWait } from 'common/utils/Utils'

export class AccountActions {
	readonly #page: Page

	constructor(page: Page) {
		this.#page = page
	}

	async signIn(parameters: {
		username: string
		pass: string
	}): Promise<void> {
		console.log(`Sign In user ${parameters.username}`)
		const homePage = new HomePage(this.#page)
		await homePage.waitToBeVisible()
		await absoluteWait(1 * 1000)
		await homePage.signInButton.click()
		const customerLoginPage = new CustomerLoginPage(this.#page)
		await customerLoginPage.waitToBeVisible()
		await absoluteWait(1.5 * 1000)
		await customerLoginPage.emailInput.fill(parameters.username)
		await absoluteWait(0.7 * 1000)
		await customerLoginPage.passwordInput.fill(parameters.pass)
		await absoluteWait(1.1 * 1000)
		await customerLoginPage.signInButton.click()
		const myAccountPage = new MyAccountPage(this.#page)
		await myAccountPage.waitToBeVisible()
	}

	async createAnAccount(parameters: {
		firstName: string
		lastName: string
		checkSignUpForNewsletter?: boolean
		checkAllowRemoteShoppingAssistance?: boolean
		email: string
		password: string
	}): Promise<void> {
		console.log(
			`Create account with the following details ${JSON.stringify(
				parameters
			)}`
		)
		const homePage = new HomePage(this.#page)
		await homePage.waitToBeVisible()
		await homePage.createAnAccountButton.click()
		const createNewCustomerAccountPage = new CreateNewCustomerAccountPage(
			this.#page
		)
		await createNewCustomerAccountPage.firstNameInput.fill(
			parameters.firstName
		)
		await createNewCustomerAccountPage.lastNameInput.fill(
			parameters.lastName
		)
		if (parameters.checkSignUpForNewsletter) {
			await createNewCustomerAccountPage.signUpForNewsletterCheckbox.check()
		}
		if (parameters.checkAllowRemoteShoppingAssistance) {
			await createNewCustomerAccountPage.allowRemoteShoppingAssistanceCheckbox.check()
		}
		await createNewCustomerAccountPage.emailInput.fill(parameters.email)
		await createNewCustomerAccountPage.passwordInput.fill(
			parameters.password
		)
		await createNewCustomerAccountPage.confirmPasswordInput.fill(
			parameters.password
		)
		await createNewCustomerAccountPage.createAnAccountButton.click()
	}
}
