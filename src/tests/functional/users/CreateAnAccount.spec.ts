// import { test } from '@playwright/test'
// import { e2eTest } from '../../fixtures/TestFixture'

// const FIRST_NAME = 'FirstName'
// const LAST_NAME = 'LastName'
// const EMAIL = 'FirstName.LastName@mail.com'
// const PASSWORD = 'Drowssap'

// test.describe('Create an account', async () => {
// 	e2eTest(
// 		'should be able to create an account via Home Page -> "Create an Account" button',
// 		async ({ actions }) => {
// 			await actions.account.createAnAccount({
// 				firstName: FIRST_NAME,
// 				lastName: LAST_NAME,
// 				email: EMAIL,
// 				password: PASSWORD,
// 			})
// 		}
// 	)
// })

import { test } from '@playwright/test'
import { absoluteWait } from 'common/utils/Utils'
import { WomenProductsCategories } from 'core/models/unions/WomenProductsCategories'
import { e2eTest } from 'tests/fixtures/TestFixture'

const PRODUCT_CATEGORY: WomenProductsCategories = 'Women Tops'
const PRODUCT_NAME = 'Mona Pullover Hoodlie'

test.describe('Browser Products', async () => {
	e2eTest(
		'should be able browse Women Tops products and select an item',
		async ({ actions }) => {
			await actions.products.browseProducts({
				category: PRODUCT_CATEGORY,
				productName: PRODUCT_NAME,
			})
		}
	)

	await absoluteWait(5 * 60 * 1000)
})

