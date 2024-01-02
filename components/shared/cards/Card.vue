<template>
	<CardStandard :product="product" v-if="model === 'standard'" />
	<CardFlat :product="product" v-else-if="model === 'flat'" />
	<CardBlock :product="product" v-else-if="model === 'block'" />
	<CardDetail :product="product" v-else-if="model === 'details'" />
	<CardSingle :product="product" v-else-if="model === 'single'" />
	<span v-else>card not registered</span>
</template>

<script setup lang="ts">
type CardModel = "standard" | "flat" | "block" | "details" | "single";

defineProps({
	model: {
		type: String as PropType<CardModel>,
		default: "standard"
	},
	product: Object as PropType<ProductType>
});
</script>
