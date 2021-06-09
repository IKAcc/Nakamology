<template>
    <div>
        <div class="flex items-center">
            <div class="flex-grow">
                <h2 class="h2">
                    <slot/>
                </h2>
            </div>
            <div v-if="to" class="flex-grow text-left">
                <g-link :to="to" class="link link--red text-lg font-bold">
                    {{ linkText }}
                    <icon-arrow class="fill-current inline-block w-4 transform rotate-45"/>
                </g-link>
            </div>
        </div>
        <hr class="border-nk-gray-300">
    </div>
</template>
<script>
import IconArrow from '~/assets/icons/arrow.svg';

export default {
    components: {
        IconArrow,
    },
    props: {
        to: {
            type: [String, Object],
            default: null,
        },
        linkText: {
            type: String,
            default: 'مشاهده‌ی همه',
        },
    },
};
</script>
