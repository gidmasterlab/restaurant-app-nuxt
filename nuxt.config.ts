import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: false
	},
	imports: {
		autoImport: true,
		dirs: ["types/*.ts", "store/*.ts"]
	},
	routeRules: {
		// Homepage pre-rendered at build time
		"/": { prerender: true },
		// Product page generated on-demand, revalidates in background
		"/products/**": { swr: 3600 },
		// checkout renders only on client-side
		"/checkout": { ssr: false }
	},
	modules: ["@pinia/nuxt", "nuxt-svgo"],
	app: {
		head: {
			htmlAttrs: {
				lang: "en"
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Reustarant Menu",
			meta: [
				{
					"http-equiv": "x-ua-compatible",
					content: "IE=edge"
				},
				{
					name: "description",
					content:
						"Non-commercial use application - This project is intended to exemplify real-world application concepts"
				}
			],
			link: [
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
					crossorigin: ""
				}
			],
			noscript: [
				{
					children:
						"We're sorry but restaurant menu doesn't work properly without JavaScript enabled. Please enable it to continue."
				}
			]
		}
	},
	components: [
		{
			path: "~/components",
			pathPrefix: false
		}
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/styles/index.scss" as *;'
				}
			}
		}
	}
});
