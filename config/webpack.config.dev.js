// const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcRoot = path.resolve(__dirname, '../src');
const devPath = path.resolve(__dirname, '../dev');
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
          title: 'dododo',
          filename: `${key}.html`,
          template: fileName,                 // 指定的模板文件来生成特定的html文件
          chunks: ['common', key],            // 指定html引用的js：splitChunks中抽离的common.min.js在模版中引用
          favicon: path.resolve(__dirname, '../src/static/favicon.ico'),
        })
      );
    }
  });
  return htmlArr;
};

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js',      // [hash:8]
    publicPath: '/'                 // 指定资源目录为当前根目录，否则多层路由将无法载入资源
  },
  devServer: {
    contentBase: devPath,
    // 模块热替换（react-hot-loader）
    // hot: true,
    // 服务启动后自动打开浏览器
    open: true,
    // 解决Cannot GET /???的问题
    historyApiFallback: true,
    // 当应用警告/出错时，在页面上出现黑色弹层展示错误信息
    overlay: {
      warnings: true,
      errors: true
    },
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
        use: 'url-loader?limit=8192?name=./images/[name].[hash].[ext]',
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
    }
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    ...htmlArray,
  ]
};
