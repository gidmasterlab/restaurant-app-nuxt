export function useIllustration() {
	const assets = import.meta.glob(`@/assets/illustrations/*.svg`, {
		eager: true,
		as: "url",
		import: "default"
	});

	const asset = (name: string): string => {
		return assets[`/assets/illustrations/${name}.svg`] as string;
	};

	return {
		asset
	};
}
