<template>
    <div class="main">
        <ClientOnly>
            <div v-if="!preferredProduct">loading...</div>
            <div v-else>
                <Divider class="ignore-on-mobile" />

                <Section>
                    <ProductDetails
                        :product="preferredProduct"
                        @add-to-cart-click="addToCartClicked" />
                </Section>

                <Divider class="ignore-on-mobile" />

                <Section :ignoreMobileGutter="true">
                    <ProductExtraItems
                        :additionals="preferredProduct.additionals"
                        :maxAdditionals="preferredProduct.maxAdditionals"
                        @extra-item-click="extraItemClicked" />
                </Section>

                <Divider class="ignore-on-mobile" />

                <Section>
                    <ProductIngredients :ingredients="preferredProduct.ingredients" />
                </Section>

                <Section :gutter="false">
                    <ProductComments
                        :comments="preferredProduct.comments"
                        @comments-change="commentsChanged" />
                </Section>

                <Section>
                    <ProductReview :reviews="preferredProduct.reviews" />
                </Section>

                <Divider />

                <Section shape="branch">
                    <ProductSuggested :products="suggestedProducts" />
                </Section>
            </div>
        </ClientOnly>

    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: () => `Restaurant - ${preferredProduct.value.name}`
});

const route = useRoute()
const router = useRouter()

const productStore = useProductStore()
const { preferredProduct, suggestedProducts } = storeToRefs(productStore)
const { loadPreferredProduct, loadSuggestedProducts } = productStore

const checkoutStore = useCheckoutStore()
const { addProductToCart } = checkoutStore

const extraItemClicked = (additionals: ProductAdditionalType[]) => {
    preferredProduct.value.additionals = additionals;
}

const commentsChanged = (text: string) => {
    preferredProduct.value.comments = text;
}

const addToCartClicked = (product: ProductType) => {
    addProductToCart(product);
    router.push('/checkout');
}

watch(
    () => route.params.slug,
    async (slug) => {
        loadPreferredProduct(slug.toString());
        loadSuggestedProducts();
    }, { immediate: true }
)
</script>

<style lang="scss" scoped>
.main {
    width: 100%;

    @include mediaQuery($breakpoint-mobile) {
        .ignore-on-mobile {
            display: none;
        }
    }

}
</style>
