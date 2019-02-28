import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function App (props) {
  return <h1>hello { props.name }</h1>
}

// 类型校验
App.propTypes = {
  name: PropTypes.number
}

App.defaultProps = {
  name: 12
}

ReactDOM.render(<App />,document.getElementById('root'));
