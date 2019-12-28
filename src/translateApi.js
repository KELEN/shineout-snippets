const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const marked = require('marked');
Promise.promisifyAll(fs);
const _ = require('lodash');

let indexText = '';

/**
 * 写入新的文件
 * @param {*} component 
 * @param {*} text 
 */
const writeFile = (component, text) => {
  const distPath = path.resolve(__dirname, 'api', component);
  fs.writeFileAsync(`${distPath}.ts`, text).catch(err => {
    console.error(`生成${component}提示失败`);
  })
}

/**
 * 转化单个文件
 * @param {*} component 
 */
const transSingleFile = (component) => {
  const srcPath = path.resolve(__dirname, 'components', component, 'cn.md');
  fs.readFileAsync(srcPath).then(res => {
    const token = marked.lexer(res.toString());
    const apiStart = token.findIndex(t => t.header && t.header[0] === '属性');
    if (apiStart > -1) {
      const attrTable = token[apiStart];
      const cells = attrTable.cells;
      if (cells) {
        const headers = attrTable.header;
        // 属性列表
        const exportArr = cells.map(cell => {
          const desc = cell.slice(1).map((item, idx) => {
            return `${_.trim(headers[idx + 1])}: ${_.trim(item)}`;
          }).join('\n');
          return `'${[cell[0]]}': ${JSON.stringify(desc)}`;
        });
        const ret = `
          export default {
            ${exportArr.join(',\n')}
          }
        `;
        indexText += `export { default as ${component} } from './${component}'; \n`;
        writeFile(component, ret);
        writeFile('index', indexText);
      } else {
        console.error(`${component}无对应的cn.md文件`)
      }
    } else {
      console.error(`${component}无对应的属性说明`)
    }
  }).catch(err => {
    console.error(err);
  })
}

fs.readdirAsync(path.resolve(__dirname, './components')).then(arr => {
  arr.forEach(item => {
    transSingleFile(_.toLower(item));
  })
})

// transSingleFile('Alert');