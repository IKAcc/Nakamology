<template>
    <div class="p-2">
        <div class="card overflow-hidden">
            <span class="block text-2xl text-white font-bold mb-4 font-serif">دسته‌ها</span>
            <div class="relative">
                <ul class="max-h-72 overflow-y-auto -m-4 p-4">
                    <li v-for="tag in tags"
                        :key="tag.id">
                        <g-link :to="tag.path" class="item flex items-center -my-2 cursor-pointer">
                            <span class="radio">
                                <span class="radio__bilbil"/>
                            </span>
                            <span class="p-2">
                                {{ tag.title }}
                            </span>
                            <span v-if="tag.totalCount"
                                  class="chips min-w-6">
                                {{ tag.totalCount | toFarsiDigits }}
                            </span>
                        </g-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<static-query>
query Tags ($page: Int) {
  tags: allTag(
      perPage: 50,
      page: $page,
    ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        belongsTo {
            totalCount
        }
      }
    }
  }
}
</static-query>
<script>
import { toFarsiDigits } from '~/scripts/utils/string';

export default {
    filters: {
        toFarsiDigits(value) {
            return toFarsiDigits(value);
        },
    },
    computed: {
        tags() {
            return [
                {
                    totalCount: 0,
                    title: 'همه',
                    path: '/projects',
                },
                ...this.$static.tags.edges.map(item => {
                    return {
                        ...item.node,
                        totalCount: item.node.belongsTo.totalCount,
                    };
                }).sort((a, b) => {
                    return b.totalCount - a.totalCount;
                })];
        },
    },
};
</script>
<style scoped>
.radio {
    @apply h-4 w-4 p-1 rounded-full border-2 border-nk-gray-500 border-opacity-90 bg-white bg-opacity-30;
}
.radio__bilbil {
    @apply block w-full h-full rounded-full
}
ul::after,
ul::before {
    content: '';
    @apply absolute right-0 w-full h-5 from-nk-gray-300;
}

ul::after {
    @apply top-0 bg-gradient-to-b;
}
ul::before {
    @apply bottom-0 bg-gradient-to-t;
}

.item:hover,
.item.active {
    @apply text-white;
}

.item:hover .radio__bilbil,
.item.active .radio__bilbil {
    @apply bg-nk-gray-500 bg-opacity-90;
}
</style>
