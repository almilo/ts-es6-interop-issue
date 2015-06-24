module.exports = {
    resolve: {
        modulesDirectories: ['src/bar-es6', 'src/foo-ts', 'node_modules'],
        extensions: ['', '.ts', '.js']
    },

    entry: __dirname + '/src/index.ts',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: /node_modules/}
        ]
    },

    devtool: 'source-map'
};
