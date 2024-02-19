import { test } from '@playwright/test'
import { WomenProductsCategories } from 'core/models/unions/WomenProductsCategories'
import { e2eTest } from 'tests/fixtures/TestFixture'

const PRODUCT_CATEGORY: WomenProductsCategories = 'Women'
const PRODUCT_NAME = 'Radiant Tee'

test.describe('Browser Products', async () => {
	e2eTest(
		'[REQ-1.1] should be able browse "Women" products and select the "Radiant Tee" product',
		async ({ actions }) => {
			await actions.products.browseProducts({
				category: PRODUCT_CATEGORY,
				productName: PRODUCT_NAME,
			})
		}
	)
})
