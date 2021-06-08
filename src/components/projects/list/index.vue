<template>
    <div>
        <ul class="flex flex-wrap">
            <li v-for="project in projects"
                :key="project.id"
                :class="[
                    cardType === 'horizontal' ? 'w-full p-2' : 'w-1/5 p-4'
                ]">
                <project-card :project="project" :card-type="cardType"/>
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
        cardType: {
            type: String,
            default: 'horizontal',
        },
    },
};
</script>
