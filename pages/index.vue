<template>
	<div class="main">
		<Section :accent="true">
			<HomeHero />
		</Section>

		<Section shape="leaf">
			<HomeSpecials :products="specialProducts" />
		</Section>

		<Divider />

		<Section>
			<HomeCategories :categories="categories" @category-click="categoryClicked" />
		</Section>

		<Divider />

		<Section shape="garlic">
			<HomeDeals :products="productsDeals" />
		</Section>

		<Section :accent="true" :ignoreBottomGutter="true">
			<HomeDelivery />
		</Section>

		<Section shape="branch">
			<HomeExperiences :products="productsExperience" />
		</Section>
	</div>
</template>

<script setup lang="ts">
const dealStore = useDealStore()
const { specialProducts, productsDeals, productsExperience } = storeToRefs(dealStore)
const { loadSpecialProducts, loadProductsDeals, loadProductsExperience } = dealStore

const categoryStore = useCategoryStore()
const { categories } = storeToRefs(categoryStore)
const { loadCategories, setPreferredCategory } = categoryStore

const categoryClicked = (id: string) => {
	setPreferredCategory(id)
}

onMounted(async () => {
	loadCategories();
	loadSpecialProducts();
	loadProductsDeals();
	loadProductsExperience();
})
</script>

<style lang="scss" scoped>
.main {
	width: 100%;

	@include mediaQuery($breakpoint-mobile) {
		.ignore-on-mobile {
			display: none;
		}
	}
}
</style>
