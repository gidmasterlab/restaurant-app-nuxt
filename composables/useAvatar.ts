export function useAvatar() {
	const assets = import.meta.glob(`@/assets/avatars/*.svg`, {
		eager: true,
		as: "url",
		import: "default"
	});

	const asset = (name: string) => {
		return assets[`/assets/avatars/${name}.svg`] as string;
	};

	return {
		asset
	};
}
