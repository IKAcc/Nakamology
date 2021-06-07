// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ناکامولوژی',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                baseDir: 'data/projects',
                path: '**/*.md',
                typeName: 'Project',
                refs: {
                    tags: {
                        typeName: 'Tag',
                        create: true,
                    },
                    founders: {
                        typeName: 'Tag',
                        create: true,
                    },
                },
            },
        },
        {
            use: 'gridsome-plugin-tailwindcss',
        },
    ],
    templates: {
        Project: '/projects/:fileInfo__name',
    },
    transformers: {
        remark: {
            plugins: [
                'remark-inline-links',
                ['remark-toc', { heading: 'sommaire' }],
                'remark-attr',
            ],
            config: {
                footnotes: true,
            },
        },
    },
    siteUrl: 'https://nakamology.ir',
};
