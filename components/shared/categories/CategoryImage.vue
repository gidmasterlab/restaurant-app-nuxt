<template>
	<img :src="categoryImage.asset(category.name)" :alt="category.name" />
</template>

<script setup lang="ts">
const props = defineProps({
	category: Object as PropType<CategoryType>
});

const categoryImage = useCategory()
</script>
