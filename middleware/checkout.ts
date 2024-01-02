export default defineNuxtRouteMiddleware(async () => {
	const checkoutStore = useCheckoutStore();
	const { checkoutQuantity } = storeToRefs(checkoutStore);

	if (checkoutQuantity.value === 0) {
		return navigateTo("/menu");
	}
});
