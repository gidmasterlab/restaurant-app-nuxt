<template>
	<div class="main">
		<Section :accent="true">
			<AboutHero />
		</Section>

		<Section>
			<AboutIntro />
		</Section>

		<Divider />

		<Section>
			<AboutArchitecture />
		</Section>

	</div>
</template>

<script setup>
useHead({
	titleTemplate: () => 'Restaurant - About Us'
});
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
}
</style>
