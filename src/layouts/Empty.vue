<template>
    <div class="layout">
        <div>
            <slot/>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.layout {
    @apply relative min-h-screen bg-nk-gray-500 text-white text-opacity-70;
}
</style>
