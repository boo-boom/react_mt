const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
          filename: `${key}.html`,
          template: fileName,       // 指定的模板文件来生成特定的html文件
          chunks: [key],            // 指定html引用的js
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
    filename: '[name].[hash:8].js'
  },
  devServer: {
    contentBase: devPath,
    // 模块热替换（react-hot-loader）
    hot: true,
    // 服务启动后自动打开浏览器
    open: true,
    // 当应用警告/出错时，在页面上出现黑色弹层展示错误信息
    overlay: {
      warnings: true,
      errors: true
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }], include: srcRoot },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      {
        test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader', {
          // 全局使用sass定义的变量，方法等（无需再在使用等地方引入）...
          loader: 'sass-resources-loader',
          options: {
            resources: srcRoot + '/common/style/resources.scss'
          }
        }], include: srcRoot
      },
      { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcRoot },
    ]
  },
  resolve: {
    // 自动扩展文件后缀名
    extensions: ['.js', '.jsx']
  },
  plugins: [
    ...htmlArray,
    new webpack.HotModuleReplacementPlugin()
  ]
};
