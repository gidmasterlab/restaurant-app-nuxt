<template>
	<component :is="icon" />
</template>

<script setup lang="ts">
const props = defineProps({
	name: String
});

const icon = shallowRef(null);

watch(
	() => props.name,
	async (name) => {
		icon.value = defineAsyncComponent(
			() => import(`./../../assets/icons/${name.toString()}.svg?component`)
		);
	},
	{ immediate: true }
);
</script>
