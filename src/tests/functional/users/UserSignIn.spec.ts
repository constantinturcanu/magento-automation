import { test } from '@playwright/test'
import { USER_EMAIL, USER_PASS } from 'common/configuration/UserAccount'
import { e2eTest } from '../../fixtures/TestFixture'

const USERNAME = USER_EMAIL
const PASSWORD = USER_PASS

test.describe('User Sign In', async () => {
	e2eTest(
		'[REQ-2.2] should be able to sign in an existing user by clicking the "Sign In" button from "Home Page" header',
		async ({ actions }) => {
			await actions.account.signIn({
				username: USERNAME,
				pass: PASSWORD,
			})
		}
	)
})
