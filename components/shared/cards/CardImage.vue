<template>
	<img :src="productImage.asset(product.image)" :alt="product.name" />
</template>

<script setup lang="ts">
const props = defineProps({ product: Object as PropType<ProductType> });
const productImage = useAsset();

</script>
