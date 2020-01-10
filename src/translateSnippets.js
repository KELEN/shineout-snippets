const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const marked = require('marked');
Promise.promisifyAll(fs);
const _ = require('lodash');

let snippetsObj = {};

/**
 * 写入新的文件
 * @param {*} component 
 * @param {*} text 
 */
const writeFile = (file, text) => {
  fs.writeFileAsync(path.resolve(__dirname, '../out', file), text).catch(err => {
    console.error(`生成代码片段提示失败`);
  })
  fs.writeFileAsync(path.resolve(__dirname, file), text).catch(err => {
    console.error(`生成代码片段提示失败`);
  })
}

/**
 * 转化单个文件
 * @param {*} component 
 */
const transSingleFile = (component) => {

  return new Promise((resolve, reject) => {
    const srcPath = path.resolve(__dirname, 'snippetsTpl', component);
    fs.readFileAsync(srcPath).then(res => {
      snippetsObj[`so-${component}`] = {
        "prefix": `so-${component}`,
        "body": _.toString(res).split('/n'),
        "description": `shineout-${component}`
      }
      resolve();
    }).catch(reject)
  })
}

fs.readdirAsync(path.resolve(__dirname, './snippetsTpl')).then(arr => {
  Promise.all(arr.map(item => {
    return transSingleFile(_.toLower(item));
  })).then(() => {
    writeFile('snippets.json', JSON.stringify(snippetsObj, null, ' '));
  }).catch(err => {
    console.error(err);
  })
})

// transSingleFile('Alert');