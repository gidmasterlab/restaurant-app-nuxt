<template>
	<div class="categories">
		<div class="header">
			<h2 class="title">A range of products segmented <strong>by categories</strong></h2>
			<p class="description large space">
				Foods and drinks have been classified into the following categories according to their
				nutritional value and ingredients.
			</p>
		</div>

		<GridCategory>
			<button
				v-for="category of categories"
				:key="category.id"
				@click="() => categoryClicked(category.id)">
				<Category :category="category" direction="vertical" />
			</button>
		</GridCategory>
	</div>
</template>

<script setup lang="ts">
defineProps({ categories: Array as PropType<CategoryType[]> });
const emit = defineEmits(["category-click"]);

const categoryClicked = (id: string) => {
	emit("category-click", id);
};
</script>

<style lang="scss" scoped>
.categories {
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
			width: 45%;

			strong {
				color: $text-accent;
				font-weight: inherit;
			}
		}

		.description {
			color: $text-secondary;
			width: 40%;
		}
	}

	@include mediaQuery($breakpoint-mobile) {
		gap: $gutter-mobile;

		.header {
			flex-direction: column;

			.title {
				width: 100%;
				text-align: center;
				margin-bottom: $gap-text-mobile;
			}

			.description {
				width: 100%;
				text-align: center;
			}
		}
	}
}
</style>
