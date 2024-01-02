<template>
	<div class="deals">
		<div class="header">
			<h2 class="title">Delicious dishes with great deals</h2>
			<Button model="flat" @click="browserClicked">browser menu</Button>
		</div>
		<GridCards>
			<NuxtLink
				v-for="product of products"
				:key="product.id"
				:to="`/product/${product.slug}`">
				<Card :product="product" model="block" />
			</NuxtLink>
		</GridCards>
	</div>
</template>

<script setup lang="ts">
defineProps({ products: Array as PropType<ProductType[]> });

const router = useRouter()

const browserClicked = () => {
	router.push('/menu')
}
</script>

<style lang="scss" scoped>
.deals {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: $gutter-desktop;

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			color: $text-primary;
		}
	}

	@include mediaQuery($breakpoint-mobile) {
		gap: $gutter-mobile;

		.header {
			flex-direction: column;
			justify-content: center;

			button {
				display: none;
			}
		}
	}
}
</style>
