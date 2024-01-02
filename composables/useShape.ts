export function useShape() {
	const assets = import.meta.glob("@/assets/shapes/*.png", {
		eager: true,
		import: "default"
	});

	const asset = (name: string): string => {
		return assets[`/assets/shapes/${name}.png`] as string;
	};

	return {
		asset
	};
}
