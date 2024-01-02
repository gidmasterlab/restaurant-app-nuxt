<template>
	<div class="products">
		<h2 class="title">Other dishes that you'll fall in love</h2>
		<GridCards>
			<NuxtLink
				v-for="product of products"
				:key="product.id"
				:to="`/product/${product.slug}`">
				<Card model="standard" :product="product" />
			</NuxtLink>
		</GridCards>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ products: Array as PropType<ProductType[]> });
</script>

<style lang="scss" scoped>
.products {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: $gutter-desktop;

	.title {
		color: $text-primary;
	}

	@include mediaQuery($breakpoint-mobile) {
		gap: $gutter-mobile;

		.title {
			text-align: center;
		}
	}
}
</style>
