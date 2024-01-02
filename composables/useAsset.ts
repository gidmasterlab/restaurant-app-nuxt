export function useAsset() {
	const assets = import.meta.glob("@/assets/dishes/*.jpg", {
		eager: true,
		import: "default"
	});

	const asset = (name: string): string => {
		return assets[`/${name}`] as string;
	};

	return {
		asset
	};
}
