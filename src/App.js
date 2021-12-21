import React, { Component } from 'react'
import './App.css'

class App extends Component {
  data = []

  // 四角の描画エリア
  area = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  }

  constructor(props) {
    super(props)
    this.state = {
      list:this.data
    }
    this.doAction = this.doAction.bind(this)
  }

  // クリック時に四角を描写するメソッド
  doAction(e) {
    this.data.push({x:e.pageX, y:e.pageY})
    this.setState({
      list:this.data
    })
  }

  // 描写する四角のビジュアルを定義するメソッド
  draw(d) {
    let s = {
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px"
    }
    return <div class="square" style={s}></div>
  }

  render() {
    return (
      <div>
        <h2 className="bg-primary text-white display-4">React</h2>
        <div className="container">
          <p>このエリアはReact、JSXを用いて作成しています。<br />四角のエリア内をクリックすると、小さな四角形を描画します。</p>
          <div style={this.area} onClick={this.doAction}>
            {this.data.map((value)=>this.draw(value))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
