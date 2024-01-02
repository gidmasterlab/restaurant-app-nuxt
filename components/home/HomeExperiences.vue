<template>
	<div class="experiences">
		<h2 class="title">It's not just food, it's an experience</h2>
		<GridCards>
			<NuxtLink
				v-for="product of products"
				:key="product.id"
				:to="`/product/${product.slug}`">
				<Card :product="product" model="standard" />
			</NuxtLink>
		</GridCards>
	</div>
</template>

<script setup lang="ts">
defineProps({ products: Array as PropType<ProductType[]> });
</script>

<style lang="scss" scoped>
.experiences {
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
