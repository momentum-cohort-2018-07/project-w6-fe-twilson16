import React, { Component } from 'react'
import books from './books.json'
import Book from './book.js'
import CondensedView from './CondensedView.js'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false,
      books: books
    }
  }

  render () {
    if (this.state.expanded.true) {
      return (
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Bookshelf App</h1>
          </header>
          <div className='section'>
            {this.state.books.map((book, idx) => <Book key={idx} book={book} />)}
          </div>
        </div>)
    } else {
      return (
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Bookshelf App</h1>
          </header>
          <div className='section'>
            {this.state.books.map((book, idx) => <CondensedView key={idx} book={book} />)}
          </div>
        </div>
      )
    }
  }
}

export default App
