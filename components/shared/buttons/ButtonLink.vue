<template>
	<button class="button">
		<Icon class="icon" :name="icon" v-if="icon" />
		<span class="text">
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
defineProps({ icon: String });
</script>

<style lang="scss" scoped>
.button {
	cursor: pointer;
	border: 0;
	background-color: transparent;
	color: $text-accent;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: $controller-gap;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}

	.icon {
		width: 24px;
		height: 24px;
		fill: $text-accent;
		color: $text-accent;
	}

	.text {
		line-height: 0;
		color: $text-accent;
	}

	@include mediaQuery($breakpoint-mobile) {
		//
	}
}
</style>
