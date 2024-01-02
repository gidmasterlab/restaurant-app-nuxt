<template>
	<div class="review">
		<div class="details">
			<h2 class="title">What are people <br />saying about this dish</h2>
			<div class="customer">
				<div class="customer-details">
					<span class="customer-title">Our Happy Customer</span>
					<div class="customer-review">
						<Icon class="icon" name="star_full" />
						<span class=""><strong>{{ format.review(reviews.totalRating, reviews.totalReviews) }}</strong> ({{
							reviews.totalReviews
						}}
							reviews)</span>
					</div>
				</div>
				<div class="avatars">
					<div class="image" v-for="index of 5" :key="index">
						<img
							class="avatar"
							:src="avatar.asset(`Avatar${index}`)"
							:alt="`Avatar ${index}`" />
					</div>
				</div>
			</div>
		</div>
		<ul class="summary">
			<li class="item" v-for="index of 5" :key="index">
				<span class="star-quantity">{{ index }}</span>
				<Icon class="icon" name="star_full" />
				<div class="progress">
					<div
						class="completed"
						:style="{
							width: `${format.reviewPercentage(getReviewRating(index), reviews.totalReviews)}%`
						}" />
				</div>
				<span class="reviewer-quantity">{{ getReviewRating(index) }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ reviews: Object as PropType<ProductReviewType> });

const avatar = useAvatar()
const format = useFormat();

const getReviewRating = (index: number): number => {
	const key = ("rating" + index) as keyof ProductReviewType;
	return props.reviews[key];
};
</script>

<style lang="scss" scoped>
.review {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.details {
		display: flex;
		flex-direction: column;
		gap: $gap-desktop;

		.title {
			color: $text-primary;
		}

		.customer {
			display: flex;
			align-items: center;

			.customer-details {
				display: flex;
				flex-direction: column;

				.customer-title {
					color: $text-primary;
				}

				.customer-review {
					display: flex;
					align-items: center;

					.icon {
						width: 24px;
						height: 24px;
						fill: $text-secondary;
						color: $text-secondary;
					}
				}
			}

			.avatars {
				display: flex;
				margin-left: calc($controller-gap * 2);
				gap: $controller-gap;

				.image {
					width: 55px;
					height: 55px;
					border-radius: 50%;

					.avatar {
						height: 100%;
						width: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}

	.summary {
		width: 440px;
		display: flex;
		flex-direction: column;
		gap: calc($gap-desktop / 2);

		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.star-quantity {
				color: $text-primary;
				font-weight: 500;
				width: 10px;
				margin-right: 2px;
			}

			.icon {
				width: 30px;
				height: 30px;
				fill: $accent-color;
				color: $accent-color;
			}

			.progress {
				margin: 0 $controller-gap;
				width: 100%;
				height: 20px;
				background-color: $input;

				.completed {
					height: 100%;
					width: 50%;
					background-color: $primary-color;
				}
			}

			.reviewer-quantity {
				width: 20px;
				text-align: center;
				color: $text-primary;
			}
		}
	}

	@include mediaQuery($breakpoint-mobile) {
		flex-direction: column;

		.details {
			width: 100%;
			gap: $gap-mobile;

			.title {
				text-align: center;
			}

			.customer {
				width: 100%;
				margin-bottom: $gap-text-mobile;

				.customer-details {
					width: 100%;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				}

				.avatars {
					display: none;
				}
			}
		}

		.summary {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: calc($gap-mobile / 2);

			.item {
				.icon {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
}
</style>
