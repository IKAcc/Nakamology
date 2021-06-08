<template>
    <header class="h-16 sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-white bg-opacity-10">
        <nav class="container mx-auto flex flex-wrap items-center">
            <g-link to="/" class="p-2 block">
                <g-image id="logo" src="~/favicon.png" alt="RangerBrand" class="h-12 w-auto block rounded-full"/>
            </g-link>
            <ul class="flex flex-wrap">
                <li v-for="link in links"
                    :key="link.to">
                    <g-link :to="link.to" class="inline-block p-3">
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
            {
                to: '/new-project',
                title: 'اضافه کردن ناکامی',
            },
            {
                to: '/about-us',
                title: 'درباره‌ی ما',
            },
        ],
    }),
};
</script>
