module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('monaco-editor', 'monaco-editor/esm/vs/editor/editor.api.js');
    }
}
