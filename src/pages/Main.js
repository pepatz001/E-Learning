import React from 'react'
import localStorage from 'localStorage'
import { publishPost, getAllPosts } from '../api'

class Main extends React.Component {
  state = {
    title: '',
    content: '',
    allPosts: []
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  submitPost = event => {
    event.preventDefault()

    publishPost(this.state.title, this.state.content)
      .then(() => { this.getPosts() })
  }

  getPosts = () => {
    getAllPosts()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }

  componentDidMount() {
    this.getPosts()

  }

  signout = event => {
    localStorage.clear();
    this.props.history.replace('/');
  }

  render() {
    const posts = this.state.allPosts
    return (
      <div class="ui bottom attached segment pushable">
        <div class="ui visible inverted left vertical sidebar menu">
          <a class="item">
            <i class="home icon"></i>
            Home
          </a>
          <a class="item">
            <i class="block layout icon"></i>
            Topics
          </a>
          <a class="item">
            <i class="smile icon"></i>
            Friends
          </a>
          <a class="item">
            <i class="calendar icon"></i>
            History
          </a>
          <a class="item">
            <i class="power icon"></i>
            Log out
          </a>
        </div>
        <div class="pusher">
          <div class="ui basic segment">
            <h3 class="ui header">Content</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Main