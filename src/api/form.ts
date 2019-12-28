
          export default {
            'className': "类型: string\n默认值: \n说明: 扩展className",
'datum': "类型: object | Datum.Form\n默认值: \n说明: formdata 辅助类，不设置Form内部会自动创建，通常情况下不需要设置。",
'disabled': "类型: bool\n默认值: false\n说明: 是否禁用，为 true 时，表单内所有元素 disabled 都为 true",
'inline': "类型: bool\n默认值: false\n说明: 是否水平布局",
'labelAlign': "类型: string\n默认值: \n说明: 可选值为 \\['top', 'right']，默认为左边对齐。",
'labelWidth': "类型: string | number\n默认值: 140px\n说明: 标签宽度，labelAlign 为 'top' 时无效。",
'mode': "类型: string\n默认值: \n说明: 模式，和 useMode 配合使用",
'onChange': "类型: function(data)\n默认值: \n说明: 表单内组件值变化函数",
'onError': "类型: function(err)\n默认值: \n说明: 异常回调处理",
'onSubmit': "类型: function(data)\n默认值: \n说明: 表单提交函数。表单内部校验失败时不会触发。",
'removeUndefined': "类型: bool\n默认值: true\n说明: 是否删除值为 undefined 的字段，默认值为删除",
'rules': "类型: object\n默认值: \n说明: 校验规则，详见 Rules",
'scrollToError': "类型: bool|number\n默认值: false\n说明: 校验失败时是否滚动到第一个校验失败组件，该值为数字时，表示相对于顶部的偏移量",
'style': "类型: object\n默认值: \n说明: 扩展样式",
'throttle': "类型: number\n默认值: 1000\n说明: ms, 两次提交间隔时长（防止重复提交）",
'initValidate': "类型: bool\n默认值: false\n说明: 设置 value 后是否自动校验"
          }
        