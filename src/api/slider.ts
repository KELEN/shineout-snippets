
          export default {
            'defaultValue': "类型: number|array\\[number]\n默认值: 无\n说明: 默认值",
'formatScale': "类型: function|false\n默认值: v => v\n说明: 格式化显示刻度，为false时，不显示刻度",
'formatValue': "类型: function|false\n默认值: v => v\n说明: 格式化显示当前值，为false时，不显示当前值",
'height': "类型: number\n默认值: 200\n说明: 高度，仅在 vertical 为 true 情况下有效",
'onChange': "类型: function\n默认值: 无\n说明: 值改变时回调函数",
'scale': "类型: array\\[number]\n默认值: \\[0, 100]\n说明: 取值范围，长度 >= 2 的数组",
'step': "类型: number\n默认值: 1\n说明: 步长，必须大于等于0；为0时，只能选取 scale 指定的值",
'value': "类型: number|array\\[number]\n默认值: 无\n说明: 当前值",
'vertical': "类型: bool\n默认值: false\n说明: 是否垂直",
'autoHide': "类型: bool\n默认值: false\n说明: 是否自动隐藏当前值和刻度",
'disabled': "类型: bool\n默认值: false\n说明: 是否禁用组件",
'range': "类型: bool\n默认值: false\n说明: 是否显示双滑块",
'onIncrease': "类型: func\n默认值: 无\n说明: 拖动超过最大值事件"
          }
        