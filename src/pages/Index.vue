<template>
    <Layout>
        <div class="flex flex-wrap items-center justify-center align-middle h-screen">
            <div class="text-center">
                <h1 class="text-nk-red-700 text-8xl font-bold">
                    ناکامولوژی
                </h1>
                <p class="m-4">
                    استارت‌آپ‌ها و پروژه‌های بزرگی که شکست خورده‌اند را ببینید و از ناکامی آن‌ها درس بگیرید.
                </p>
                <g-link to="/projects" class="inline-block mt-4 py-3 px-6 font-bold text-white rounded-full shadow-md border-4 border-nk-red-700 hover:bg-nk-red-700">
                    مشاهده‌ی پروژه‌ها
                </g-link>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '~/layouts/Empty';

export default {
    components: {
        Layout,
    },
};
</script>
