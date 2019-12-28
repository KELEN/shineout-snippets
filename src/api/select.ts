
          export default {
            'absolute': "类型: bool\n默认值: false\n说明: 为 true 时，选项弹出层在 DOM 中独立 render",
'autoAdapt': "类型: bool\n默认值: false\n说明: 是否列表自适应",
'clearable': "类型: bool\n默认值: false\n说明: 是否可清除值",
'multiple': "类型: bool\n默认值: false\n说明: 是否是多选",
'columns': "类型: number\n默认值: 1\n说明: columns 大于 1 时，选项展示为多列布局模式",
'columnWidth': "类型: number\n默认值: 160\n说明: column 单列宽度，仅在 columns 大于 1 时有效",
'data': "类型: array\n默认值: 必填\n说明: 数据项，单条数据作为 value 的数据必须是唯一的",
'treeData': "类型: array\n默认值: 无\n说明: 树形结构数据项，\\[{children: []}\\]",
'defaultValue': "类型: array\n默认值: \n说明: 初始值",
'disabled': "类型: bool | function\n默认值: false\n说明: 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项",
'filterDelay': "类型: number\n默认值: 400\n说明: 毫秒。用户输入触发 fitler 事件的延时",
'format': "类型: string | function\n默认值: d => d\n说明: 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value",
'name': "类型: string\n默认值: 无\n说明: Form 存取数据的名称",
'keygen': "类型: string | function(obj):string | true\n默认值: 必填\n说明: 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id)",
'onChange': "类型: function(value)\n默认值: 无\n说明: value 为 datum.getValue()",
'onCreate': "类型: function | bool\n默认值: 无\n说明: 如果设置了 onCreate 事件，组件为可输入状态<br />onCreate为函数时，将此函数返回值作为新的选项拆入最上方<br />onCreate为true时，使用默认函数 text => text",
'onFilter': "类型: function\n默认值: 无\n说明: onFilter 不为空时，可以输入过滤数据<br />onFilter 如果返回一个函数，使用这个函数做前端过滤<br />如果不返回，可以自行做后端过滤",
'prediction': "类型: function\n默认值: (val, d) => val===format(d)\n说明: 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配",
'renderItem': "类型: string | function(d)\n默认值: 必填\n说明: 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果",
'renderResult': "类型: function(d)\n默认值: renderItem\n说明: 选中后在结果中显示的内容，默认和 renderItem 相同",
'value': "类型: array | string | object\n默认值: \n说明: 在Form中，value会被表单接管，value无效",
'compressed': "类型: bool\n默认值: false\n说明: 将选中值合并，只在多选模式下有效",
'zIndex': "类型: number\n默认值: 1000\n说明: 选项列表 z-index 值",
'groupBy': "类型: func: (record, index, data) => {}\n默认值: 无\n说明: 分组",
'filterSingleSelect': "类型: bool\n默认值: false\n说明: 当筛选数据仅为一条时，失焦后直接选中该条数据。仅在 Filter 下有效。",
'separator': "类型: string\n默认值: 无\n说明: 多选情况下设置后，value 会处理为 separator 分隔的字符串",
'childrenKey': "类型: string\n默认值: 'children'\n说明: 树形数据下，指定子数据的属性名",
'defaultExpandAll': "类型: bool\n默认值: false\n说明: 默认展开全部子节点, 仅树形数据下有效",
'renderUnmatched': "类型: func\n默认值: 无\n说明: \b渲染未匹配值的方式\b",
'emptyAfterSelect': "类型: bool\n默认值: false\n说明: 选中后是否清空输入框内容 ｜"
          }
        