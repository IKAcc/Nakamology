<template functional>
    <span :class="[
        'btn',
        `btn--${props.color || 'red'}`,
        props.bordered === '' ? 'btn--outline' : 'btn--filled',
        props.classes
    ]">
        <g-link v-if="props.to" :to="props.to" class="smooth">
            <slot/>
        </g-link>
        <span v-else @click="$emit('click')" class="smooth"/>
    </span>
</template>
<style scoped>
.btn {
    @apply inline-block;
}

.btn > * {
    @apply py-2 px-4 block font-bold text-white rounded-full relative border-4;
}

.btn.btn--filled.btn--red > * {
    @apply bg-nk-red-700 border-nk-red-700;
    @apply hover:bg-nk-red-500 hover:border-nk-red-500;
    box-shadow: 0px 2px 15px 9px #af04042e, 0px 17px 20px -16px #af0430;
}
.btn.btn--outline.btn--red > * {
    @apply border-nk-red-700;
    @apply hover:bg-nk-red-500 hover:border-nk-red-500;;
}
</style>
