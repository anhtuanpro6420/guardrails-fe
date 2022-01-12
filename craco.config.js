/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': 'red' },
                        modifyVars: {}, // All default variables: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
