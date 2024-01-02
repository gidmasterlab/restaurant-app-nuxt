<template>
	<div class="footer">
		<Container class="content">
			<div class="logo">
				<Logo />
				<p class="description">
					©2013 Copyright. All rights reserved.
					<br />
					Restaurant hands-on project
					<br />
					Designed by GID Master Lab
				</p>
			</div>

			<nav class="menu">
				<span class="title">Navigation</span>
				<NuxtLink to="/">Deals</NuxtLink>
				<NuxtLink to="/menu">Menu</NuxtLink>
				<NuxtLink to="/checkout">Checkout</NuxtLink>
				<NuxtLink to="/about">About us</NuxtLink>
			</nav>

			<nav class="menu">
				<span class="title">Additional Links</span>
				<a href="https://github.com/gidmasterlab/restaurant-app-vue" target="_blank">Source code project</a>
				<NuxtLink to="/about">Non-commercial use</NuxtLink>
				<a href="https://github.com/gidmasterlab" target="_blank">GID Master Lab</a>
			</nav>
		</Container>
	</div>
</template>

<style lang="scss" scoped>
.footer {
	width: 100%;
	background-color: $background-accent;
	display: flex;
	justify-content: center;

	.content {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.logo {
			display: flex;
			flex-direction: column;

			.description {
				color: $text-secondary;
				margin-top: 20px;
				line-height: 25px;
			}
		}

		.menu {
			display: flex;
			flex-direction: column;

			.title {
				color: $text-primary;
				font-weight: 500;
				margin-bottom: 20px;
			}

			a {
				cursor: pointer;
				color: $text-secondary;

				&:not(:last-child) {
					margin-bottom: 10px;
				}

				&:hover {
					opacity: 0.8;
				}

				&.router-link-exact-active {
					cursor: default;
					opacity: 1;
					color: $text-accent;
				}
			}
		}
	}

	@include mediaQuery($breakpoint-mobile) {
		//
	}
}
</style>
