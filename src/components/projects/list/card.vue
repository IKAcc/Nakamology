<template>
    <component :is="cardType !== 'profile' ? 'g-link' : 'div'"
               :to="project.path"
               :class="[
                   'card',
                   `card--${cardType}`
               ]">
        <div class="card__image">
            <g-image :src="project.logo || require('~/assets/images/unknown.png')"
                     class="w-full"/>
        </div>
        <div class="card__text">
            <div>
                <p class="text-white text-xl font-serif">
                    {{ project.name }}
                </p>
                <p>
                    {{ project.description }}
                </p>
            </div>
            <div v-if="cardType !== 'profile'" class="mt-2">
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
    </component>
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
        cardType: {
            type: String,
            default: 'horizontal',
        },
    },
};
</script>
<style scoped>
.card {
    @apply flex;
}

.card--horizontal {
    @apply items-center;
}
.card--horizontal .card__image {
    @apply flex-shrink-0 w-24;
}
.card--horizontal .card__text {
    @apply pr-4;
}

.card--profile {
    @apply flex-col text-center;
}
.card--profile .card__image {
    @apply p-2 w-full;
}

.card--vertical {
    @apply flex-col h-full;
}
.card--vertical .card__image {
    @apply p-4 w-full;
}
.card--vertical .card__text,
.card--profile .card__text {
    @apply flex px-4 flex-grow flex-col justify-between;
}

</style>
