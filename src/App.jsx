import React, { Component } from 'react';
import { observable, action } from 'mobx';
import PropTypes from 'prop-types';

class Store {
  @observable cache = { queue: [] }
}

const store = new Store();

class Bar extends Component {
  static propTypes = {
    queue: PropTypes.array
  };

  render() {
    const queue = this.props.queue;
    console.log(queue);
    return <div>{queue && queue.length}</div>
  }
}

class Foo extends Component {
  render() {
    const { cache } = store;

    return (
      <div>
        <Bar queue={cache && cache.queue}></Bar>
      </div>
    );
  }
}

export default Foo;
