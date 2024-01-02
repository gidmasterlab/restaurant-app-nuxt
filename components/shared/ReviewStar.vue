<template>
	<div class="stars">
		<Icon
			class="icon"
			v-for="star of [1, 2, 3, 4, 5]"
			:key="`${star}-${review}`"
			:name="calculateReview(star, review)" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ review: Number });

const calculateReview = (star: number, review: number) => {
	const adjustedReview = review - star + 1;

	if (adjustedReview >= 1) {
		return 'star_full';
	}

	if (adjustedReview <= 0) {
		return 'star';
	}

	return 'star_half';
}
</script>

<style lang="scss" scoped>
.stars {
	display: flex;
	align-items: center;

	.icon {
		width: 32px;
		height: 32px;
		fill: $accent-color;
		color: $accent-color;
	}

	@include mediaQuery($breakpoint-mobile) {
		.icon {
			width: 24px;
			height: 24px;
		}
	}
}
</style>
