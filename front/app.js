import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'



var NewPostForm = React.createClass({
  getInitialState: function() {
    return({input: ""})
  },
  handleChange: function(e) {
    this.setState({input: e.target.value})
  },
  makeNewPost: function(e) {
    e.preventDefault()
    let body = this.state.input
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: {title: body}
    })
  },
  render: function() {
    return(
      <form
        onSubmit={this.makeNewPost}>
        <input
          type="text"
          placeholder="body"
          onChange={this.handleChange}
          value={this.state.input}></input>
        <input type="submit"></input>
      </form>
    )
  }
})

ReactDOM.render(
  <NewPostForm/>,
  document.getElementById('root')
)
