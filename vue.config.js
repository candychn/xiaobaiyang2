// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#df5659',
                        'link-color': '#df5659',
                        'border-radius-base': '4px',
                        'item-active-bg': 'rgba(255, 71, 71, 0.1)',
                        'item-hover-bg': '#eeecec',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }
};