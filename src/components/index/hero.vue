<template>
    <div class="p-12 my-16">
        <div class="flex flex-wrap mx-auto max-w-full w-full md:w-2/3 bg-nk-gray-300">
            <div class="w-full lg:w-2/3 px-8 py-16">
                <div class="font-serif">
                    <span class="opacity-50 text-lg">( ~. لُ) [ فر. ] (اِمر.)</span>
                    <h1 class="text-white opacity-90 mt-2 mb-4 text-5xl md:text-9xl font-bold">
                        ناکامولوژی
                    </h1>
                    <p class="text-lg">
                        مطالعه استارتاپ‌ها و پروژه‌های شکست خورده.
                    </p>
                </div>
                <div class="pt-4">
                    <nk-btn to="/projects">
                        پروژ‌ها را ببین
                    </nk-btn>
                    <nk-btn v-if="device.isDesktop" to="/about-us" bordered classes="mr-4">
                        به ما کمک کن
                    </nk-btn>
                </div>
            </div>
            <div class="hidden lg:block w-1/3 pt-8">
                <div class="relative h-full bg-nk-red-700 -ml-8">
                    <div class="absolute right-0 bottom-0 p-4 font-serif text-white">
                        <span class="block text-2xl">بیش از {{ totalCount | toFarsiDigits }}</span>
                        <span class="block text-lg">داستان شکست</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { toFarsiDigits } from '~/scripts/utils/string';

import NkBtn from '~/components/general/button';

export default {
    filters: {
        toFarsiDigits(value) {
            return toFarsiDigits(value);
        },
    },
    components: {
        NkBtn,
    },
    props: {
        totalCount: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        ...mapState(['device']),
    },
};
</script>
