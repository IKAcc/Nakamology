<template>
    <Layout>
        <div class="flex flex-wrap items-center justify-center align-middle h-screen">
            <div class="text-center">
                <div class="font-serif">
                    <h1 class="text-nk-red-700 text-9xl font-bold">
                        ناکامولوژی
                    </h1>
                    <div class="text-right m-4 text-xl">
                        <span class="opacity-50">( ~. لُ) [ فر. ] (اِمر.)</span>
                        <p>
                            مطالعه استارتاپ‌ها و پروژه‌های شکست خورده
                        </p>
                    </div>
                </div>
                <div class="pt-4">
                    <g-link to="/projects" class="button">
                        پروژ‌ها را ببین
                    </g-link>
                    <g-link to="/about-us" class="link--white mr-4">
                        به ما کمک کن
                    </g-link>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '~/layouts/Empty';

export default {
    metaInfo: {
        titleTemplate: '%s - مطالعه استارتاپ‌ها و پروژه‌های شکست خورده',

    },
    components: {
        Layout,
    },
};
</script>
