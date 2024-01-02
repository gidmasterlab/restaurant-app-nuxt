<template>
	<div class="list">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: $gap-desktop;

	@include mediaQuery($breakpoint-mobile) {
		gap: $gap-mobile;
	}
}
</style>
