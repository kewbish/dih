module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
}