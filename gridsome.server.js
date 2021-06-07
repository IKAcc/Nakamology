// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

const truncatise = require('truncatise');

const remark = require('remark');
const html = require('remark-html');

const remarkInlineLinks = require('remark-inline-links');
const remarkToc = require('remark-toc');
const remarkAttr = require('remark-attr');
const remarkFN = require('remark-footnotes');
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
    api.loadSource(({ addSchemaResolvers }) => {
        addSchemaResolvers({
            Project: {
                excerpt: {
                    type: 'String',
                    async resolve(obj) {
                        return new Promise((resolve, reject) => {
                            remark()
                                .use(remarkInlineLinks)
                                .use(remarkToc, { heading: 'sommaire' })
                                .use(remarkAttr)
                                .use(remarkFN)
                                .use(html)
                                .process(obj.content, function(err, file) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    resolve(
                                        truncatise(String(file), {
                                            TruncateLength: 4,
                                            TruncateBy: 'paragraphs',
                                            Strict: false,
                                            StripHTML: false,
                                            Suffix: ' ...',
                                        })
                                    );
                                });
                        });
                    },
                },
            },
        });
    });
};
