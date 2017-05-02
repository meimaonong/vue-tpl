var path = require('path')
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

var WebpackNotifierPlugin = require('webpack-notifier')

const vuxLoader = require('vux-loader')

// 插件列表
let pluginsList = [
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({    // webpack的全局注入，在项目中少写点require
          Vue: 'vue',
          VueRouter: 'vue-router',
          VueResource: 'vue-resource',
          Vuex: 'vuex',
          // ElementUI: 'element-ui',

          // $: 'jquery',
          // jQuery: 'jquery',
          // 'window.jQuery': 'jquery',
          // 'window.$': 'jquery',
    })
]



//入口文件列表
let entryArr = {
    index: './src/views/pages/index/main.js',
    account: './src/views/pages/account/main.js',
    user: './src/views/pages/user/main.js'
}

// dll加载
let viewUrl = ''

// 系统页
//let chunksArr = ['common', 'main']
let chunksArr = []
let entryKeys = Object.keys(entryArr)

entryKeys.map(function(key) {

    chunksArr = ['common', key]

    if (process.env.NODE_ENV === 'production') {
        // 首页处理
        if (key == 'index') {
          viewUrl = 'index.html'
        } else {
          viewUrl = key + '/index.html'
        }
        

        pluginsList.push(
          new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'dist/[name]/build.js?[chunkhash]'
          }),
          new webpack.DefinePlugin({
            devtoolTip: false
          }),
          new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./dist/vendor/vendor-manifest.json')
          }),
          new HtmlWebpackPlugin({
            title: '标题测试',
            filename: viewUrl,
            template: './src/tpl/tpl.html',
            hash: false,
            chunks: chunksArr
          })
      )
    } else {
        // 首页处理
        if (key == 'index') {
          viewUrl = 'index.html'
        } else {
          viewUrl = key + '/index.html'
        }

        pluginsList.push(
          new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'dist/[name]/build.js?[hash]'
          }),
          new webpack.DefinePlugin({
            devtoolTip: true
          }),
          new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./dist/vendor/vendor-manifest-dev.json')
          }),
          new HtmlWebpackPlugin({
            title: '标题测试',
            filename: viewUrl,
            template: './src/tpl/tpl-dev.html',
            hash: false,
            chunks: chunksArr
          })
        )
    }

    return key
})

//pluginsList.push('vux-ui');
/*module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})*/

let webpackConfig = {
  entry: entryArr,
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'dist/[name]/build.js?[chunkhash]',
    chunkFilename: 'dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // 'scss': 'vue-style-loader!css-loader!sass-loader',
            // 'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'import-glob'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'dist/public/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: pluginsList,
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.common.js',
      // 'vuex$': 'vuex/dist/vuex.js',
      // 'vue-router$': 'vue-router/dist/vue-router.common.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'duplicate-style']
})

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ])
}
