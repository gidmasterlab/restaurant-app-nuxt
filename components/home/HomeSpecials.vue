<template>
	<div class="specials">
		<h2 class="title">
			Chef's specials with <br />
			premium quality ingredients
		</h2>
		<GridCards>
			<NuxtLink
				v-for="product of products"
				:key="product.id"
				:to="`/product/${product.slug}`">
				<Card :product="product" model="flat" />
			</NuxtLink>
		</GridCards>
	</div>
</template>

<script setup lang="ts">
defineProps({ products: Array as PropType<ProductType[]> });
</script>

<style lang="scss" scoped>
.specials {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: $gutter-desktop;

	.title {
		color: $text-primary;
		text-align: center;
	}

	@include mediaQuery($breakpoint-mobile) {
		gap: $gutter-mobile;
	}
}
</style>
