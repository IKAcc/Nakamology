<template>
    <Layout>
        <hero :total-count="totalProjectCount"/>
        <div class="container mx-auto px-2 py-4">
            <nk-title to="/projects">
                آخرین ناکامی‌ها
            </nk-title>
            <div class="md:-mx-4 py-4">
                <projects-list :projects="latestProjects" :card-type="device.isMobile ? 'horizontal' : 'vertical'"/>
            </div>
        </div>
        <!-- <div class="container mx-auto px-2 py-4">
            <h2 class="h2 text-center">
                حامیان ما
            </h2>
            <div class="flex flex-wrap justify-center py-4">
                <div v-for="(supporter, index) in supporters"
                     :key="index"
                     class="p-4 w-full md:w-1/5 text-center">
                    <a :href="supporter.url" target="_blank" class="card block">
                        <g-image :src="supporter.image" class="h-28 w-auto p-2 max-w-full mx-auto"/>
                        <p class="p-2 font-serif text-lg text-white ">{{ supporter.name }}</p>
                        <span class="text-white opacity-40">{{ supporter.description }}</span>
                    </a>
                </div>
            </div>
        </div> -->
    </Layout>
</template>
<page-query>
query Projects {
  projects: allProject(
      sortBy: "failure_year",
      order: DESC,
      perPage: 5,
      page: 1,
    ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        path
        logo
        start_year
        failure_year
        tags {
            id
            title
        }
        description
      }
    }
  }
}
</page-query>
<script>
import { mapState } from 'vuex';

import Hero from '~/components/index/hero';
import ProjectsList from '~/components/projects/list';
import NkTitle from '~/components/general/title';

export default {
    metaInfo: {
        titleTemplate: '%s - مطالعه استارتاپ‌ها و پروژه‌های شکست خورده',

    },
    components: {
        Hero,
        ProjectsList,
        NkTitle,
    },
    data: () => ({
        supporters: [
            // {
            //     name: 'استیکرهای فلربو',
            //     url: 'https://flerbo.ir/%DA%86%D8%A7%D9%BE-%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9%D8%B1-%D8%A7%D8%AE%D8%AA%D8%B5%D8%A7%D8%B5%DB%8C',
            //     image: require('~/assets/images/supporters/flerbo.png'),
            //     description: 'استیکر لوگوی تیمت رو بساز!',
            // },
            // {
            //     name: 'سازیتو',
            //     url: 'https://sazito.com/',
            //     image: require('~/assets/images/supporters/sazito.png'),
            //     description: 'ساخت رایگان فروشگاه اینترنتی',
            // },
        ],
    }),
    computed: {
        ...mapState(['device']),
        latestProjects() {
            return this.$page.projects.edges.map(item => item.node).splice(0, this.device.isMobile ? 3 : 5);
        },
        totalProjectCount() {
            return this.$page.projects.pageInfo.totalPages * 5;
        },
    },
};
</script>
