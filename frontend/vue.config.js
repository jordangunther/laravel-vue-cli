const path = require('path');

const aliasMap = {
    '@': path.resolve(__dirname, 'node_modules/@jordangunther/vue-storybook-component-library/src'),
};


module.exports = {
    // proxy API requests to Valet during development
    // devServer: {
    //     proxy: 'http://laracon.test'
    // },

    chainWebpack: (config) => {
        Object.entries(aliasMap).forEach(([key, value]) => {
            config.resolve.alias.set(key, value);
        });
    },

    css: {
        loaderOptions: {
            scss: {
                /**
                 * imports for global variables, use an alias (@) and the file path
                 * relative to ./src/
                 */
                additionalData: `
          @import "@/styles/abstracts/_functions.scss";
          @import "@/styles/abstracts/_mixins.scss";
          @import "@/styles/abstracts/_variables.scss";
        `,
            },
            postcss: {
                map: true,
                plugins: [
                    require('autoprefixer')
                ]
            },
        },
    },
    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public',

    // modify the location of the generated HTML file.
    // make sure to do this only in production.
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/index.blade.php'
        : 'index.html'
}
