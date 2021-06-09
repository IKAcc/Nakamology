<template>
    <div class="layout overflow-x-hidden">
        <nk-header/>
        <div>
            <slot/>
        </div>
    </div>
</template>
<script>
import NkHeader from '~/components/general/header';

export default {
    components: {
        NkHeader,
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
