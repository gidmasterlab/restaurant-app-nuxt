export function useCategory() {
	const assets = import.meta.glob(`@/assets/categories/*.svg`, {
		eager: true,
		as: "url",
		import: "default"
	});

	const asset = (name: string): string => {
		return assets[`/assets/categories/${name}.svg`] as string;
	};

	return {
		asset
	};
}
