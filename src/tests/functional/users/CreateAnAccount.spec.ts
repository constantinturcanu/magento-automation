import { test } from '@playwright/test'
import { e2eTest } from '../../fixtures/TestFixture'

const FIRST_NAME = 'FirstName'
const LAST_NAME = 'LastName'
const EMAIL = 'FirstName.LastName@mail.com'
const PASSWORD = 'Drowssap'

test.describe('Create an account', async () => {
	e2eTest(
		'[REQ-2.1] should be able to create an account via "Home Page" -> "Create an Account" button',
		async ({ actions }) => {
			await actions.account.createAnAccount({
				firstName: FIRST_NAME,
				lastName: LAST_NAME,
				email: EMAIL,
				password: PASSWORD,
			})
		}
	)
})
