<template>
    <footer class="font-serif">
        <div class="container mx-auto px-2 py-12">
            <div class="flex">
                <div class="flex-grow">
                    <g-link to="/" class="text-nk-red-700 text-3xl font-black">
                        ناکامولوژی
                    </g-link>
                    <p class="mt-5">
                        مطالعه استارتاپ‌ها و پروژه‌های شکست خورده.
                    </p>
                    <p/>
                </div>
                <div class="flex-grow" v-for="(list, index) in lists" :key="index">
                    <span class="h2 block -mt-5">{{ list.header }}</span>
                    <ul>
                        <li v-for="link in list.links" :key="link.to">
                            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link">
                                {{ link.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data: () => ({
        lists: [
            {
                header: 'گیتهاب',
                links: [
                    {
                        title: 'داده‌ها',
                        url: 'https://github.com/IKAcc/nakamology',
                    },
                    {
                        title: 'گزارش مشکل',
                        url: 'https://github.com/IKAcc/nakamology/issues',
                    },
                ],
            },
        ],
    }),
};
</script>
