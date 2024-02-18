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
