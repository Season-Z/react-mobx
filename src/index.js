import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import todoStore from './todoStore';
import { Provider } from 'mobx-react';

class Base extends Component {
  render() {
    return (
      <Provider todolist={todoStore}>
        <App />
      </Provider>
    );
  }
};

ReactDOM.render(<Base />, document.getElementById('root'));
