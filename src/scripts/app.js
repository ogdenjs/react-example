import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import _ from 'lodash'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Todos for {moment().format('ll')}</h1>
        <Todos />
      </div>
    )
  }
})

const Todos = React.createClass({
  getInitialState() {
    return {
      newTodo: '',
      todos: []
    }
  },

  addTodo(e) {
    e.preventDefault()

    let todos = this.state.todos
    todos.unshift(this.state.newTodo)

    this.setState({
      todos: todos,
      newTodo: ''
    })
  },

  deleteTodo(todo) {
    let todos = _.without(this.state.todos, todo)

    this.setState({
      todos: todos
    })
  },

  handleInputChange(e) {
    this.setState({newTodo: e.target.value})
  },

  render() {
    let todos = _.map(this.state.todos, (todo) => {
      return (
        <li key={todo}>
          {todo}
          <button onClick={this.deleteTodo.bind(this, todo)}>x</button>
        </li>
      )
    })

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleInputChange} value={this.state.newTodo} />
        </form>

        <br /> <br />

        <ul>{todos}</ul>
      </div>
    )
  }
})

render(
  <App />,
  document.getElementById('app')
)
