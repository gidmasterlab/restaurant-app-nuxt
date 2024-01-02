<template>
	<div class="template">
		<header :class="{ hide: hideHeader }">
			<Header :checkout="checkoutQuantity" />
		</header>

		<main>
			<slot />
		</main>

		<footer>
			<Footer />
		</footer>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const hideHeader: Ref<boolean> = ref<boolean>(false);

const checkoutStore = useCheckoutStore()
const { checkoutQuantity } = storeToRefs(checkoutStore)

watch(
	() => route.name,
	async name => {
		hideHeader.value = name === 'product';
	}, { immediate: true }
)
</script>

<style lang="scss">
.template {
	width: 100%;
	height: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;

	header {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	main {
		width: 100%;
		display: flex;
		justify-content: center;
		flex: 1;
	}

	footer {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	@include mediaQuery($breakpoint-mobile) {
		margin-bottom: $toolbar-mobile;

		footer {
			display: none;
		}

		header {
			&.hide {
				display: none;
			}
		}
	}
}
</style>
