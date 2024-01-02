<template>
    <div class="main">

        <Divider class="ignore-on-mobile" />

        <Section>
            <ErrorNotFound @redirect="redirect" v-if="status === 404" />
            <ErrorServer @redirect="redirect" v-else />
        </Section>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    error: Object,
});

const status: ComputedRef<number> = computed<number>(() => props.error.statusCode);
const message: ComputedRef<number> = computed<number>(() => props.error.statusMessage);

const redirect = () => {
    clearError({ redirect: '/menu' })
}
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
