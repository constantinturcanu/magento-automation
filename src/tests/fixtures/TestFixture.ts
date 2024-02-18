import { test as base } from '@playwright/test'
import { SITE_URL } from 'common/configuration/SiteData'
import { ActionsFactory } from 'core/actionsfactory/ActionsFactory'
import { HomePage } from 'core/models/pages/home/HomePage'

type ActionsFixture = {
	actions: ActionsFactory
}

export const e2eTest = base.extend<ActionsFixture>({
	actions: async ({ page }, use) => {
		const actions = new ActionsFactory(page)
		await page.goto(SITE_URL)
		const homePage = new HomePage(page)
		await homePage.waitToBeVisible()
		await use(actions)
	},
})

export { expect } from '@playwright/test'
