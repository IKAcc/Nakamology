// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

const META_TAGS = [
    {
        name: 'charset',
        content: 'utf-8',
    },
];
const LINKS = [
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v27.2.0/dist/font-face.css',
    },
];

const HEAD = [
    {
        key: 'meta',
        items: META_TAGS,
    },
    {
        key: 'link',
        items: LINKS,
    },
];

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);

    // Add html attributes
    head.htmlAttrs = {
        lang: 'fa',
        dir: 'rtl',
    };
    // Add tags to head
    HEAD.forEach(type => {
        type.items.forEach(tag => {
            head[type.key].push(tag);
        });
    });
}
