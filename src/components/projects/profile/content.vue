<template>
    <div class="card">
        <article v-if="content && content !== '\n'"
                 v-html="content"/>
        <div v-else class="text-center py-6 px-2 font-serif text-lg text-white opacity-20">
            متاسفانه توضیحات بیشتری وجود ندارد.
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: String,
            default: '',
        },
    },
};
</script>
<style>
article {
    @apply -mt-4 p-2;
}
article h2 {
    @apply font-serif my-4 text-2xl font-bold text-white;
}
article p {
    @apply mb-2;
}
article ul {
    @apply list-square list-inside;
}
article a {
    @apply text-white underline transition-all duration-300 ease-in-out;
    @apply hover:text-nk-red-500;
}
</style>
