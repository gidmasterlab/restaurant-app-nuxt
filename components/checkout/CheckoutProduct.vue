<template>
	<div class="product">
		<div class="summary" :class="{ extra: false }">
			<img class="image" :src="productImage.asset(product.image)" :alt="product.name" />
			<div class="content">
				<div class="category">
					<img class="icon" src="@/assets/categories/meals.svg?url" alt="Meals" />
					<span class="text">{{ product.category }}</span>
				</div>
				<span class="title large">{{ product.name }}</span>
				<div class="actions">
					<span class="price large">
						{{ format.currency(productCost) }}
					</span>
					<Button model="small" @click="removeProduct">remove</Button>
				</div>
			</div>
		</div>

		<ul class="details" v-if="additionals.length > 0">
			<li v-for="additional of additionals" :key="additional.id">
				<Icon name="arrow_forward" class="icon" />
				<span class="item">
					{{ `${additional.quantity}x ${additional.name}` }}
				</span>
				<div class="hr" />
				<span class="price" :class="{ cut: additional.quantity === 0 }">
					{{ format.currency(additional.price * additional.quantity) }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ product: Object as PropType<ProductType> });
const emit = defineEmits(["remove-product-click"]);

const productImage = useAsset();
const format = useFormat();
const price = usePrice();


const productCost: ComputedRef<number> = computed<number>(() => price.getProductCost(props.product));
const additionals: ComputedRef<ProductAdditionalType[]> = computed<ProductAdditionalType[]>(
	() => props.product.additionals.filter((product) => product.quantity > 0)
);

const removeProduct = () => {
	emit("remove-product-click", props.product.id);
};
</script>

<style lang="scss" scoped>
.product {
	display: flex;
	flex-direction: column;
	border: 1px solid $divider;
	border-radius: $controller-radius;

	.summary {
		display: flex;
		align-items: center;
		height: 130px;
		overflow: hidden;

		.image {
			border-top-left-radius: $controller-radius;
			border-bottom-left-radius: $controller-radius;
			// border: 1px solid red;
			width: 200px;
			height: 100%;
			object-fit: cover;
		}

		.content {
			position: relative;
			flex: 1;
			min-height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 $controller-padding;

			.category {
				display: flex;
				align-items: center;

				.icon {
					width: 28px;
					height: 28px;
				}

				.text {
					color: $text-secondary;
					margin-left: $controller-gap;
				}
			}

			.title {
				color: $text-primary;
			}

			.actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: $controller-gap;

				.price {
					color: $text-accent;
					font-weight: 500;
				}
			}
		}

		&.extra {
			.image {
				border-bottom-left-radius: 0;
			}
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		padding: $controller-padding;
		gap: $controller-gap;

		li {
			display: flex;
			align-items: center;

			.icon {
				width: 24px;
				height: 24px;
				fill: $text-accent;
				color: $text-accent;
			}

			.item {
				color: $text-primary;
			}

			.hr {
				flex: 1;
				height: 1px;
				border-top: 1px dotted $text-secondary;
				margin: 0 $controller-gap;
			}

			.price {
				color: $text-primary;

				&.cut {
					text-decoration: line-through;
				}
			}
		}
	}

	@include mediaQuery($breakpoint-mobile) {
		.summary {
			display: flex;
			align-items: flex-start;
			height: 110px;

			.image {
				width: 40%;
				object-fit: cover;
			}

			.content {
				.category {
					.icon {
						width: 24px;
						height: 24px;
					}
				}
			}
		}

		.details {
			li {
				.icon {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
}
</style>
