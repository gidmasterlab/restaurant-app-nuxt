<template>
	<section class="section" :class="{ accent: accent }">
		<Container
			class="content"
			:gutter="gutter"
			:ignoreMobileGutter="ignoreMobileGutter"
			:ignoreTopGutter="ignoreTopGutter"
			:ignoreBottomGutter="ignoreBottomGutter">
			<div class="shape" v-if="image">
				<img :src="image" alt="Shape" />
			</div>
			<slot></slot>
		</Container>
	</section>
</template>

<script setup lang="ts">
type ShapeType = "branch" | "garlic" | "leaf";

const props = defineProps({
	accent: Boolean,
	shape: String as PropType<ShapeType>,
	gutter: {
		type: Boolean,
		default: true
	},
	ignoreMobileGutter: {
		type: Boolean,
		default: false
	},
	ignoreTopGutter: {
		type: Boolean,
		default: false
	},
	ignoreBottomGutter: {
		type: Boolean,
		default: false
	}
});

const shapeImage = useShape()
const image = shapeImage.asset(props.shape)

</script>

<style lang="scss" scoped>
.section {
	width: 100%;
	background-color: $background-primary;
	display: flex;
	justify-content: center;

	.content {
		position: relative;
		display: flex;
		flex-direction: column;

		.shape {
			position: absolute;
			z-index: $position-index-shapes;
			top: 30px;
			right: 0px;
			height: 160px;
			width: auto;
			pointer-events: none;

			img {
				height: 100%;
				width: auto;
			}
		}
	}

	&.accent {
		background-color: $background-accent;
	}
}
</style>
