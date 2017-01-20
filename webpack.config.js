//webpack ./public/app.js ./public/bundle.js

var webpack = require('webpack');

var path = require('path');

module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        'script!admin-lte/dist/js/app.min.js',
        
        'bootstrap-loader',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':        'jquery',
            'jQuery':   'jquery'
        })
    ],
    output: {
        path: __dirname + '/public',
        //chunkFilename: './fonts/[id]',
        filename: './js/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias:{            
            Main:           'app/components/Main.jsx',
            Nav:            'app/components/Nav.jsx',           
            appStyles:      'app/styles/app.scss',
            adminLteStyles: 'node_modules/admin-lte/dist/css/AdminLTE.min.css',
            adminLteSkins:  'node_modules/admin-lte/dist/css/skins/_all-skins.min.css'
        },
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader','less-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
                        
            {   
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&minetype=application/font-woff&name=[name].[ext]" 
            },
            {   
                test: /\.(ttf|eot|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader?name=[name].[ext]" 
            },
            // Bootstrap 3
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery' },

            {test: /\.less$/, loaders: ['style-loader','css-loader','less-loader']}
        ]

    },
    sassLoader:{
        includePaths: [
            path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets'),
            path.resolve(__dirname, './node_modules/admin-lte/dist/css')
        ]
    }
};