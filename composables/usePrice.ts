import type { ProductType } from "@/types/ProductType";

type Discount = "number" | "percentage";

export function usePrice() {
	const getAdditionalsCost = (product: ProductType): number => {
		return product.additionals.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
			0
		);
	};

	const getProductCost = (product: ProductType): number => {
		const additional = getAdditionalsCost(product);
		return product.price + additional;
	};

	const getPreviousProductCost = (product: ProductType): number => {
		const additional = getAdditionalsCost(product);
		const currentPrice = product.previousPrice > 0 ? product.previousPrice : product.price;
		return currentPrice + additional;
	};

	const getAllProductsCost = (products: ProductType[]): number => {
		return products
			.map((product) => getProductCost(product))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	};

	const getAllPreviousProductsCost = (products: ProductType[]): number => {
		return products
			.map((product) => getPreviousProductCost(product))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	};

	const getAllProductsDiscount = (products: ProductType[], type: Discount = "number"): number => {
		const discounts = products
			.filter((product) => product.previousPrice > 0)
			.map((product) => getProductCost(product) - getPreviousProductCost(product))
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

		if (type === "percentage") {
			const total = getAllProductsCost(products);
			return Math.abs((discounts * 100) / total);
		}

		return discounts;
	};

	const hasProductsDiscount = (products: ProductType[]): boolean => {
		return getAllPreviousProductsCost(products) > getAllProductsCost(products);
	};

	return {
		getAdditionalsCost,
		getProductCost,
		getPreviousProductCost,
		getAllProductsCost,
		getAllPreviousProductsCost,
		getAllProductsDiscount,
		hasProductsDiscount
	};
}
