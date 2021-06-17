<template>
    <Layout>
        <div class="mx-auto w-full max-w-5xl py-12">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/4">
                    <div class="md:sticky top-18">
                        <div class="p-2">
                            <project-card :project="project" card-type="profile"/>
                        </div>
                        <div class="p-2">
                            <a :href="`https://github.com/IKAcc/Nakamology/issues/new?assignees=&labels=misinformation&template=misleading-information.md&title=اشتباهی+درباره‌ی+«${project.name}»+وجود+داره`"
                               target="_blank"
                               class="text-sm opacity-80"
                               rel="noopener noreferrer">
                                اشتباهی وجود داره؟
                                <span class="link link--red">به ما بگو!</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-3/4 p-2">
                    <div class="mb-4">
                        <info-card :project="project"/>
                    </div>
                    <div class="mb-4">
                        <content-card :content="project.content"/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    name
    logo
    start_year
    failure_year
    failure_reason
    investors
    founders
    content
    tags {
        id
        title
    }
    description
  }
}
</page-query>
<script>
import ProjectCard from '~/components/projects/list/card';
import InfoCard from '~/components/projects/profile/info';
import ContentCard from '~/components/projects/profile/content';

import { toFarsiDigits } from '~/scripts/utils/string';

export default {
    filters: {
        toFarsiDigits(value) {
            return toFarsiDigits(value);
        },
        toListFormat(values) {
            if (values && values.length) {
                const formatter = new Intl.ListFormat('fa');
                return formatter.format(values);
            }
            return '-';
        },
    },
    components: {
        ProjectCard,
        InfoCard,
        ContentCard,
    },
    metaInfo() {
        return {
            title: `دلایل شکست ${this.$page.project.name}`,
        };
    },
    computed: {
        project() {
            return this.$page?.project || {};
        },
    },
};
</script>
