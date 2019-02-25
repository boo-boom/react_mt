// const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const srcRoot = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

// 设置多入口
const getEntry = () => {
  const entryMap = {};
  fs.readdirSync(pageDir).forEach(pathName => {
    const fullPathName = path.resolve(pageDir, pathName);
    const stat = fs.statSync(fullPathName);
    const fileName = path.resolve(fullPathName, mainFile);
    // 是文件夹且路径存在
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathName] = fileName;
    }
  });
  return entryMap;
};

// 设置多html
const getHtmlArray = (entryMap) => {
  const htmlArr = [];
  Object.keys(entryMap).forEach(key => {
    const fullPathName = path.resolve(pageDir, key);
    const fileName = path.resolve(fullPathName, `${key}.html`);
    if (fs.existsSync(fileName)) {
      htmlArr.push(
        new HtmlWebpackPlugin({
          title: 'title111',
          filename: `${key}.html`,
          template: fileName,                 // 指定的模板文件来生成特定的html文件
          chunks: ['common', key],            // 指定html引用的js：splitChunks中抽离的common.min.js在模版中引用
        })
      );
    }
  });
  return htmlArr;
};

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: 'production',
  entry: entryMap,
  output: {
    path: distPath,
    filename: 'js/[name].[hash:8].min.js',
    publicPath: '/'                 // 指定资源目录为当前根目录，否则多层路由将无法载入资源
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
        include: srcRoot
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: srcRoot
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
          // 全局使用sass定义的变量，方法等（无需再在使用等地方引入）...
          loader: 'sass-resources-loader',
          options: {
            resources: srcRoot + '/common/style/resources.scss'
          }
        }],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192&name=./img/[name].[hash:8].[ext]',
        include: srcRoot
      },
    ]
  },
  resolve: {
    // 自动扩展文件后缀名
    extensions: ['.js', '.jsx'],
    // 别名
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@index': path.resolve(__dirname, '../src/page/index'),
      '@static': path.resolve(__dirname, '../src/static'),
      '@common': path.resolve(__dirname, '../src/common')
    }
  },
  optimization: {
    // 抽离node_modules中用到到代码到common.min.js中
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'common'
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // new CopyWebpackPlugin([
    //   { from: 'src/static', to: path.resolve(distPath, 'static'), force: true }
    // ]),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css"
    }),
    ...htmlArray,
  ]
};
