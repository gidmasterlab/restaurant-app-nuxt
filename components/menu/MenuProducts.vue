<template>
	<div class="products">
		<div class="header">
			<span class="quantity large">{{ products.length }} products available</span>
			<Button model="link" @click="resetClicked">reset and display all products</button>
		</div>

		<div class="grid-products">
			<GridCards>
				<NuxtLink
					v-for="product of products"
					:key="product.id"
					:to="`/product/${product.slug}`">
					<Card :product="product" model="details" />
				</NuxtLink>
			</GridCards>
		</div>

		<div class="list-products">
			<GridCards :single="true">
				<template v-for="(product, index) of products" :key="product.id">
					<NuxtLink :to="`/product/${product.slug}`">
						<Card :product="product" model="single" />
					</NuxtLink>
					<CardDivider v-if="index < products.length - 1" />
				</template>
			</GridCards>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({ products: Array as PropType<ProductType[]> });

const emit = defineEmits(['reset-click']);

const resetClicked = () => {
	emit("reset-click");
};
</script>

<style lang="scss" scoped>
.products {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.quantity {
			color: $text-primary;
		}
	}

	.grid-products {
		display: block;
	}

	.list-products {
		display: none;
	}

	@include mediaQuery($breakpoint-mobile) {
		.header {
			display: none;
		}

		.grid-products {
			display: none;
		}

		.list-products {
			display: block;
		}
	}
}
</style>
