<template>
	<CategoryVertical :category="category" :selected="selected" v-if="direction === 'vertical'" />
	<CategoryHorizontal
		:category="category"
		:selected="selected"
		v-else-if="direction === 'horizontal'" />
	<span v-else>category not registered</span>
</template>

<script setup lang="ts">
type CategoryDirection = "vertical" | "horizontal";

defineProps({
	category: Object as PropType<CategoryType>,
	selected: Boolean,
	direction: {
		type: String as PropType<CategoryDirection>,
		default: "vertical"
	}
});
</script>
