<template>
    <div class="layout">
        <nk-header/>
        <div>
            <slot/>
        </div>
        <nk-footer/>
    </div>
</template>
<script>
import NkHeader from '~/components/general/header';
import NkFooter from '~/components/general/footer';

export default {
    components: {
        NkHeader,
        NkFooter,
    },
    mounted() {
        this.$store.dispatch('checkDevice');
    },
};
</script>
<style lang="postcss" scoped>
.layout {
    @apply relative min-h-screen bg-nk-gray-500 text-white text-opacity-70;
}
</style>
