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

class Hello extends React.PureComponent {
  render () {
    console.log('hello render');
    return (
      <div>
        <h1>name: {this.props.name}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
