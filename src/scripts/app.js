import React from 'react'
import { render } from 'react-dom'
import md5 from 'md5'

const App = React.createClass({
  getInitialState() {
    return {
      msg: 'Props are awesome!',
      inputMsg: 'This is a string from the input field!'
    }
  },

  changeMessage() {
    let newMsg = prompt('Enter a new message')
    this.setState({msg: newMsg})
  },

  changeInputMsg(e) {
    this.setState({inputMsg: e.target.value})
  },

  render() {
    return (
      <div>
        <h1>React Example</h1>
        <br />

        <Message msg={this.state.msg} />
        <button onClick={this.changeMessage}>Change this message</button>
        <br /> <br />

        <p>{this.state.inputMsg}</p>
        <Input inputMsg={this.state.inputMsg} change={this.changeInputMsg} />
        <br /> <br />

        <Gravatar />
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
      </div>
    )
  }
})

const Input = React.createClass({
  render() {
    return <input type="text" value={this.props.inputMsg} onChange={this.props.change} />
  }
})

const Gravatar = React.createClass({
  getInitialState() {
    return {
      email: ''
    }
  },

  change(e) {
    this.setState({email: e.target.value})
  },

  render() {
    let url = "https://gravatar.com/avatar/" + md5(this.state.email)

    return (
      <div>
        <h2>Gravatar</h2>
        <img src={url} /><br />
        <input type="text" placeholder="Gravatar Email Address" value={this.state.email} onChange={this.change} />
      </div>
    )
  }
})

render(
  <App />,
  document.getElementById('app')
)
