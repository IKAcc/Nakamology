<template>
    <div class="card flex items-center">
        <div class="flex-shrink-0 w-24">
            <g-image :src="project.logo || require('~/assets/images/unknown.png')"
                     class="w-full rounded-full"/>
        </div>
        <div class="pr-4">
            <p class="text-white text-xl font-serif">
                {{ project.name }}
            </p>
            <p>
                {{ project.description }}
            </p>
            <div class="mt-2">
                <span v-for="tag in project.tags"
                      class="chips"
                      :key="tag.id">
                    {{ tag.title }}
                </span>
                <span class="chips" dir="ltr">
                    {{ (project.start_year || '??') | toFarsiDigits }} - {{ (project.failure_year || '??') | toFarsiDigits }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { toFarsiDigits } from '~/scripts/utils/string';

export default {
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
