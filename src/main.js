// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';
import store from '~/store';

import DefaultLayout from '~/layouts/Default.vue';

import InfiniteLoading from 'vue-infinite-loading';

import '~/assets/style/index.css';

const META_TAGS = [
    {
        name: 'charset',
        content: 'utf-8',
    },
];
const SCRIPTS = [
    {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-QW2XREL5YM',
        body: true,
        async: true,
    },
    {
        innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QW2XREL5YM');
        `,
        body: true,
    },
];
const LINKS = [
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v27.2.0/dist/font-face.css',
    },
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/rastikerdar/sahel-font@v3.4.0/dist/font-face.css',
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
    {
        key: 'script',
        items: SCRIPTS,
    },
];

export default function (Vue, { router, head, isClient, appOptions }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);

    Vue.use(InfiniteLoading);

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

    // Create Store
    Vue.use(Vuex);
    appOptions.store = new Vuex.Store(store);
}
