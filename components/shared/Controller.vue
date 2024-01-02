<template>
	<div class="controller" :class="{ half: half }">
		<label class="label" v-if="label">{{ label }}</label>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps({
	label: String,
	half: Boolean
});
</script>

<style lang="scss" scoped>
.controller {
	width: 100%;
	display: flex;
	flex-direction: column;

	&.half {
		width: 47%;
	}

	.label {
		color: $text-primary;
		font-size: 14px;
	}

	@include mediaQuery($breakpoint-mobile) {
		&.half {
			width: 100%;
		}
	}
}
</style>
