const _ = require('lodash');

const str = '<Form\n  value={${1:value}}\n  onChange={${2:this.handleChange}}\n  onSubmit={${3:this.handleSubmit}}\n>\n  <Form.Item label=\"Email\">\n    <Input name=\"email\" />\n  </Form.Item>\n</Form>';

const getSnippetTemplate = (text) => {
  const reg = /\$\{[\d]+:([^\}]+)\}.*?/g;
  return text.replace(reg, function(match, value) {
    return value;
  });
}

getSnippetTemplate(str);

const components = ['Button', 'Dropdown', 'Icon', 'Image', 'Cascader', 'Checkbox', 'DatePicker', 'Form', 'Input', 'Radio',
  'Rate', 'Rule', 'Select', 'Slider', 'Switch', 'Textarea', 'TreeSelect', 'Upload',
  'Carousel', 'Pagination', 'Table', 'Tree', 'Alert', 'Message', 'Modal', 'Popover',
  'Progress', 'Spin', 'Tag', 'Tooltip', 'Card', 'Grid', 'Sticky', 'Tabs', 'Breadcrumb', 'Menu'
];

// { "command": "shineout.icon", "category": "shineout docs", "title": "Icon" },
const arr = components.map(com => {
  return JSON.stringify({
    "command": `shineout.${com.toLowerCase()}`,
    "category": "shineout docs",
    "title": com
  })
})

console.log(JSON.stringify(arr.join(',')))