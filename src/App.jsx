import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject(({ TodoStore }) => ({ todoStore: TodoStore }))
@observer
class TodoList extends Component {
  onNewTodo = () => {
    this.props.todoStore.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  }
  render() {
    const { todoStore } = this.props;
    return (
      <div>
        {todoStore.report}
        <ul>
          {
            todoStore.todos.map((todo, idx) => <TodoView todo={todo} key={idx} />)
          }
        </ul>
        {todoStore.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
        <button onClick={this.onNewTodo}>new todo</button>
        <small>(double)</small>
      </div>
    );
  }
}

@observer
class TodoView extends Component {
  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
  render() {
    const { todo } = this.props;

    return (
      <li onDoubleClick={this.onRename}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.onToggleCompleted}
        />
        {todo.task}
        {
          todo.assignee ? <small>{todo.assignee.name}</small> : null
        }
      </li>
    );
  }
}

export default TodoList;
