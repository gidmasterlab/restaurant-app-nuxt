<template>
	<div class="complete">
		<div class="block">
			<span class="title large">Order Summary</span>

			<div class="content">
				<Controller :half="true" label="Order Total">
					<span>
						<small class="cut" v-if="hasDiscount">
							{{ format.currency(previousCost) }}
						</small>
						{{ format.currency(productsCost) }}
					</span>
				</Controller>
				<Controller :half="true" label="Discount">
					<span>{{ format.currency(discount) }}</span>
				</Controller>
			</div>
		</div>

		<div class="divider" />

		<div class="block">
			<span class="title large">Delivery Details</span>

			<div class="content">
				<Controller :half="true" label="Street Address">
					<span>{{ checkoutDelivery?.address }}</span>
				</Controller>

				<Controller :half="true" label="City">
					<span>{{ checkoutDelivery?.city }}</span>
				</Controller>

				<Controller :half="true" label="State">
					<span>{{ checkoutDelivery?.state }}</span>
				</Controller>

				<Controller :half="true" label="Zip code">
					<span>{{ checkoutDelivery?.zipcode }}</span>
				</Controller>
			</div>
		</div>

		<div class="divider" />

		<div class="block">
			<span class="title large">Payment Details</span>

			<div class="content">
				<Controller :half="true" label="Name on Card">
					<span>{{ checkoutPayment?.holderName }}</span>
				</Controller>

				<Controller :half="true" label="Card Number">
					<span>{{ checkoutPayment?.cardNumber }}</span>
				</Controller>

				<Controller :half="true" label="Expiry Date">
					<span>{{ checkoutPayment?.expiryDate }}</span>
				</Controller>

				<Controller :half="true" label="CVV">
					<span>{{ checkoutPayment?.cvv }}</span>
				</Controller>
			</div>
		</div>

		<div class="divider" />

		<div class="actions">
			<Button :disabled="processing" model="standard" @click="completePurchaseClicked">
				confirm and pay
			</Button>

			<Button :disabled="processing" model="flat" @click="cancelPurchaseClicked"> cancel </Button>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	processing: Boolean,
	products: Array as PropType<ProductType[]>,
	checkoutDelivery: Object as PropType<CheckoutDeliveryType>,
	checkoutPayment: Object as PropType<CheckoutPaymentType>
});

const emit = defineEmits(["complete-purchase-click", "cancel-purchase-click"]);

const format = useFormat();
const price = usePrice();

const productsCost: ComputedRef<number> = computed<number>(() =>
	price.getAllProductsCost(props.products)
);
const previousCost: ComputedRef<number> = computed<number>(() =>
	price.getAllPreviousProductsCost(props.products)
);
const discount: ComputedRef<number> = computed<number>(() =>
	price.getAllProductsDiscount(props.products)
);
const hasDiscount: ComputedRef<boolean> = computed<boolean>(() =>
	price.hasProductsDiscount(props.products)
);

const completePurchaseClicked = () => {
	emit("complete-purchase-click");
};

const cancelPurchaseClicked = () => {
	emit("cancel-purchase-click");
};
</script>

<style lang="scss" scoped>
.complete {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: $gap-desktop;

	.title {
		color: $text-primary;
		font-weight: 500;
	}

	.divider {
		width: 100%;
		height: 1px;
		background-color: $divider;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: $controller-gap;

		.content {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: $controller-gap;

			span {
				color: $text-primary;

				.cut {
					color: $text-secondary;
					text-decoration: line-through;
				}
			}
		}
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}

	@include mediaQuery($breakpoint-mobile) {
		gap: $gap-mobile;

		.actions {
			button {
				width: 100%;
			}

			:not(:first-child) {
				display: none;
			}
		}
	}
}
</style>
