<template>
    <header class="h-16 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-nk-gray-500 bg-opacity-50 border-b border-nk-gray-300">
        <nav class="container mx-auto h-full flex flex-wrap items-center font-serif">
            <g-link to="/" class="p-2 block text-nk-red-700 text-3xl font-black">
                ناکامولوژی
            </g-link>
            <ul class="flex flex-wrap">
                <li v-for="link in links"
                    :key="link.to">
                    <g-link :to="link.to" class="link link--white p-2 mx-2">
                        {{ link.title }}
                    </g-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data: () => ({
        links: [
            {
                to: '/projects',
                title: 'لیست ناکامی‌ها',
            },
            // {
            //     to: '/new-project',
            //     title: 'اضافه کردن ناکامی',
            // },
            {
                to: '/about-us',
                title: 'درباره‌ی ما',
            },
        ],
    }),
};
</script>
