import React, { Component } from 'react'
import Book from './book.js'
import EditingView from './EditingView.js'
import './App.css'
import request from 'superagent'
import AddBookView from './AddBookView.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false,
      books: [],
      editing: null,
      adding: null
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

  updateBookInApi (book, id) {
    request.put('http://localhost:4000/books/id')
      .send(book)
  }

  editingBook (e, book) {
    this.setState({
      editing: {book}
    })
  }

  addingBook (e, book) {
    this.setState({
      adding: {book}
    })
  }

  updateBook (e, book, id) {
    const bookId = this.book.id
    this.updateBookInApi(book, bookId)
  }

  render () {
    if (this.state.editing) {
      return (<EditingView book={this.state.editing} />)
    }

    if (this.state.adding) {
      return (<AddBookView book={this.state.adding} />)
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Bookshelf App</h1>
        </header>
        <div className='section'>
          {this.state.books.map((book, idx) => <Book key={idx} book={book} editingBook={this.editingBook.bind(this)} />)}
        </div>
      </div>
    )
  }
}

export default App
