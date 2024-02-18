export type MenProductsCategories =
	| MenProductsMainCategories
	| MenProductsTopsSubCategories
	| MenProductsBottomsSubCategories

export type MenProductsMainCategories = 'Tops' | 'Bottoms'

export type MenProductsTopsSubCategories =
	| 'Jackets'
	| 'Hoodies & Sweatshirts'
	| 'Tees'
	| 'Bras & Tanks'

export type MenProductsBottomsSubCategories = 'Pants' | 'Shorts'
