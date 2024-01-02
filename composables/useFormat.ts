export function useFormat() {
	const currency = (value: number, digits: number = 2): string => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
		}).format(value);
	};

	const percentage = (value: number): string => {
		return (
			new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			}).format(value) + "%"
		);
	};

	const review = (rating: number, reviews: number): string => {
		const average = rating / reviews;

		return new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 1,
			maximumFractionDigits: 1
		}).format(average);
	};

	const reviewPercentage = (rating: number, reviews: number): number => {
		return (rating * 100) / reviews;
	};

	return {
		currency,
		percentage,
		review,
		reviewPercentage
	};
}
