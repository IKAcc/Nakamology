<template>
    <Layout>
        <div class="mx-auto w-full max-w-5xl">
            <h1 class="h1 px-2">
                لیست ناکامی‌ها‌ی «{{ $page.tag.title }}»
            </h1>
            <div class="flex flex-wrap">
                <div class="w-2/3">
                    <projects-list :projects="loadedItems"/>
                </div>
                <aside class="relative w-1/3">
                    <div class="md:sticky top-2">
                        <sidebar-filters/>
                    </div>
                </aside>
            </div>
        </div>
    </Layout>
</template>
<page-query>
query Tag ($id: ID!) {
  tag (
      id: $id
    ) {
    title
    belongsTo {
      edges {
        node {
          ...on Project {
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
  }
}
</page-query>
<script>
import ProjectsList from '~/components/projects/list';
import SidebarFilters from '~/components/projects/sidebar/filter';

export default {
    metaInfo() {
        return {
            titleTemplate: `%s - لیست ناکامی‌ها‌ی «${this.$page.tag.title}»`,
        };
    },
    components: {
        ProjectsList,
        SidebarFilters,
    },
    computed: {
        loadedItems() {
            return this.$page.tag.belongsTo.edges.map(item => item.node).sort((a, b) => {
                return b.failure_year - a.failure_year;
            });
        },
    },
};
</script>
