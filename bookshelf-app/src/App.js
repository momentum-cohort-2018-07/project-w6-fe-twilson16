import React, { Component } from 'react'
import Book from './book.js'
// import CondensedView from './CondensedView.js'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false,
      books: []
    }
  }

  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Bookshelf App</h1>
        </header>
        <div className='section'>
          {this.state.books.map((book, idx) => <Book key={idx} book={book} />)}
        </div>
      </div>
    )
  }
}

export default App
