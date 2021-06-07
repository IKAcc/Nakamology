<template>
    <div>
        <ul class="flex flex-wrap">
            <li v-for="project in projects"
                :key="project.id"
                class="p-2 w-full">
                <project-card :project="project"/>
            </li>
        </ul>
    </div>
</template>
<script>
import ProjectCard from '~/components/projects/list/card';

export default {
    components: {
        ProjectCard,
    },
    props: {
        projects: {
            type: Array,
            default: () => ([]),
        },
    },
};
</script>
