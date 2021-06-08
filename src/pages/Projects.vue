<template>
    <Layout>
        <div class="mx-auto w-full max-w-5xl">
            <h1 class="text-white text-4xl font-bold px-2 py-8 font-serif">
                لیست ناکامی‌ها
            </h1>
            <div class="flex flex-wrap">
                <div class="w-2/3">
                    <projects-list :projects="loadedItems"/>
                    <ClientOnly>
                        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
                            <div slot="no-more">
                                به آخرش رسیدی ...
                            </div>
                            <div slot="no-results">
                                شرمنده، هیچ پستی نداریم :(
                            </div>
                        </infinite-loading>
                    </ClientOnly>
                </div>
                <aside class="relative w-1/3">
                    <div class="md:sticky top-18">
                        <sidebar-filters/>
                    </div>
                </aside>
            </div>
        </div>
    </Layout>
</template>
<page-query>
query Projects ($page: Int) {
  projects: allProject(
      sortBy: "failure_year",
      order: DESC,
      perPage: 5,
      page: $page,
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
import ProjectsList from '~/components/projects/list';
import SidebarFilters from '~/components/projects/sidebar/filter';

export default {
    metaInfo: {
        titleTemplate: '%s - لیست ناکامی‌ها',
    },
    components: {
        ProjectsList,
        SidebarFilters,
    },
    data() {
        return {
            loadedItems: [],
            currentPage: 1,
        };
    },
    created() {
        this.loadedItems.push(...this.$page.projects.edges.map(item => item.node));
    },
    methods: {
        async infiniteHandler($state) {
            if (this.currentPage + 1 > this.$page.projects.pageInfo.totalPages) {
                $state.complete();
            } else {
                const { data } = await this.$fetch(
                    `/projects/${this.currentPage + 1}`
                );
                if (data.projects.edges.length) {
                    this.currentPage = data.projects.pageInfo.currentPage;
                    this.loadedItems.push(...data.projects.edges.map(item => item.node));
                    $state.loaded();
                } else {
                    $state.complete();
                }
            }
        },
    },
};
</script>
