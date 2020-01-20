const str = '<Form\n  value={${1:value}}\n  onChange={${2:this.handleChange}}\n  onSubmit={${3:this.handleSubmit}}\n>\n  <Form.Item label=\"Email\">\n    <Input name=\"email\" />\n  </Form.Item>\n</Form>';


const getSnippetTemplate = (text) => {
  const reg = /\$\{[\d]+:([^\}]+)\}.*?/g;
  return text.replace(reg, function(match, value) {
    return value;
  });
}

getSnippetTemplate(str);