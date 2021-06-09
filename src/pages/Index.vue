<template>
    <Layout>
        <hero :total-count="totalProjectCount"/>
        <div class="container mx-auto px-2">
            <div class="flex items-center">
                <div class="flex-grow">
                    <p class="h2">
                        آخرین ناکامی‌ها
                    </p>
                </div>
                <div class="flex-grow text-left">
                    <g-link to="/projects" class="link link--red text-lg font-bold">
                        مشاهده‌ی همه
                        <icon-arrow class="fill-current inline-block w-4 transform rotate-45"/>
                    </g-link>
                </div>
            </div>
            <hr class="border-nk-gray-300">
            <div class="md:-mx-4 py-4">
                <projects-list :projects="latestProjects" :card-type="device.isMobile ? 'horizontal' : 'vertical'"/>
            </div>
        </div>
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
import IconArrow from '~/assets/icons/arrow.svg';

export default {
    metaInfo: {
        titleTemplate: '%s - مطالعه استارتاپ‌ها و پروژه‌های شکست خورده',

    },
    components: {
        Hero,
        ProjectsList,
        IconArrow,
    },
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
