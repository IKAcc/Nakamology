<template>
    <div class="flex items-center bg-nk-gray-300 shadow-lg p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div class="flex-shrink-0 w-24">
            <g-image :src="project.logo || require('~/assets/images/unknown.png')"
                     class="w-full rounded-full"/>
        </div>
        <div class="pr-4">
            <p class="text-white text-xl">
                {{ project.name }}
            </p>
            <p>
                {{ project.description }}
            </p>
            <div class="text-sm mt-2">
                <small v-for="tag in project.tags"
                       class="inline-block ml-2 bg-nk-gray-500 bg-opacity-50 px-2 py-1 rounded-full"
                       :key="tag.id">
                    {{ tag.title }}
                </small>
                <small class="inline-block ml-2 bg-nk-gray-500 bg-opacity-50 px-2 py-1 rounded-full" dir="ltr">
                    {{ (project.start_year || '??') | toFarsiDigits }} - {{ (project.failure_year || '??') | toFarsiDigits }}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import { toFarsiDigits } from '~/scripts/utils/string';

export default {
    metaInfo: {
        title: 'پروژه‌های شکست خورده',
    },
    filters: {
        toFarsiDigits(value) {
            return toFarsiDigits(value);
        },
    },
    props: {
        project: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
