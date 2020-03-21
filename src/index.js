//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'lib-flexible'

//2. 类组件
class Child extends React.Component {
  state = {}
  render() {
    return <div className="one">哈哈</div>
  }
}

//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
