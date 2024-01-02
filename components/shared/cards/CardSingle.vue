<template>
	<div class="card">
		<div class="content">
			<CardImage class="image" :product="product" />
			<div class="block">
				<h3 class="title">{{ product.name }}</h3>

				<div class="details">
					<div class="cost">
						<span class="price">{{ format.currency(product.price) }}</span>
						<span class="discount" v-if="product.previousPrice > 0">
							<small>{{ format.currency(product.previousPrice) }}</small>
						</span>
					</div>

					<span class="calories">{{ product.calories }}cal</span>
				</div>

				<div class="details">
					<div class="category">
						<img
							class="icon"
							:src="categoryImage.asset(product.category)"
							:alt="product.category" />
						<span class="text">{{ product.category }}</span>
					</div>

					<div class="review">
						<Icon class="icon" name="star" />
						<span class="text">{{ format.review(product.reviews.totalRating, product.reviews.totalReviews) }}
							({{
								product.reviews.totalReviews
							}})</span>
					</div>
				</div>
			</div>
		</div>
		<p class="description">{{ product.description }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps({ product: Object as PropType<ProductType> });

const categoryImage = useCategory();
const format = useFormat();
</script>

<style lang="scss" scoped>
.card {
	cursor: pointer;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: $background-primary;

	.content {
		display: flex;
		gap: 10px;

		.image {
			width: auto;
			min-width: 90px;
			height: 70px;
			border-radius: 8px;

			img {
				border-radius: 8px;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.block {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			background-color: $background-primary;
			// padding: 15px;

			.title {
				color: $text-primary;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}

			.details {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.cost {
					display: flex;
					align-items: center;
					gap: $controller-gap;

					.price {
						color: $text-accent;
						font-weight: 500;
					}

					.discount {
						text-decoration: line-through;
						color: $text-secondary;
					}
				}

				.calories {
					color: $text-secondary;
				}

				.category {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 5px;

					.icon {
						width: 24px;
						height: 24px;
					}

					.text {
						color: $text-secondary;
					}
				}

				.review {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					gap: 5px;

					.icon {
						width: 24px;
						height: 24px;
						fill: $accent-color;
						color: $accent-color;
					}

					.text {
						color: $text-secondary;
					}
				}
			}
		}
	}

	.description {
		color: $text-secondary;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@include mediaQuery($breakpoint-mobile) {
		//
	}
}
</style>
