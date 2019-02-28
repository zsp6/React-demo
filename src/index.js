import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      helloName: '张三',
      helloAge: 12
    }
  }
  fn1 () {
    this.setState({
      helloName: '李四'
    })
  }
  fn2 () {
    this.setState({
      helloAge: this.state.helloAge + 1
    })
  }
  render() {
    return (
      <div>
        <Hello name={this.state.helloName} age={this.state.helloAge}></Hello>
        <button onClick={ this.fn1.bind(this) }>修改helloName</button>
        <button onClick={ this.fn2.bind(this) }>修改helloAge</button>
      </div>
    )
  }
}
// PureComponent 基础组件，能够帮我阻止数据没有发生变化的情况。（下一次的数据跟上一次相同的情况）
class Hello extends React.PureComponent {
  render () {
    console.log('hello render');
    return (
      <div>
        <h1>name: {this.props.name}</h1>
      </div>
    )
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextProps.name !== this.props.name) {
  //     // 如果 name 有变化，才让更新
  //     return true;
  //   }
  //   return false;
  // }
}

ReactDOM.render(<App />,document.getElementById('root'));
