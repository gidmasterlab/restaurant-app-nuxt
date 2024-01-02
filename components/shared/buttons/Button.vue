<template>
	<ButtonStandard :icon="icon" v-if="model === 'standard'">
		<slot></slot>
	</ButtonStandard>

	<ButtonFlat :icon="icon" v-else-if="model === 'flat'">
		<slot></slot>
	</ButtonFlat>

	<ButtonSmall :icon="icon" v-else-if="model === 'small'">
		<slot></slot>
	</ButtonSmall>

	<ButtonLink :icon="icon" v-else-if="model === 'link'">
		<slot></slot>
	</ButtonLink>

	<span v-else>button not registered</span>
</template>

<script setup lang="ts">
type ButtonModel = "standard" | "flat" | "small" | "link";

defineProps({
	icon: String,
	model: {
		type: String as PropType<ButtonModel>,
		default: "standard"
	}
});
</script>
