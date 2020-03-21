
# 1. 安装 lib-flexible，postcss-px2rem
`yarn add lib-flexible postcss-px2rem`

# 2. 配置
1. 导出 webpack 配置 :  `yarn eject => config` (git add . git commit -m 123)
2. 修改配置 `config/webpack.config.js` 
```js
// 2.1 引入
const px2rem = require('postcss-px2rem')

// 2.2 在 101 行 添加 , 上面有 state:3
px2rem({ remUnit: 37.5 })

// px2rem({ remUnit: 37.5 }) 的意思就是1rem = 37.5px 这个是根据375px设计稿来的，
```


# 3. 引入
- 在入口文件 index.js 里引入 lib-flexible 
```js
import 'lib-flexible'
```

