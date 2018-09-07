import React, { Component } from 'react'
// import books from './books.json'

class Book extends Component {
  constructor (props) {
    super()
    this.state = {
      expanded: true
    }
  }

  render () {
    const { book } = this.props
    return (
      <div className='whole-book-div' key={this.props.idx}>
        <div className='collpased-info-div'>
          <div className='book-cover'><img className='book-image' src={book.coverImageUrl} alt='Book Cover' /></div>
          <div className='book-title'><span className='bold'>Title:</span> {book.title}</div>
          <div className='author'><span className='bold'>Author:</span> {book.author}</div>
          <div className='short-description'><span className='bold'>Short Description:</span> {book.shortDescription}</div>
          <div className='button-div'><button className='expand-button'>Less Information</button></div>
        </div>
        <div className='expanded-info-div' data-expanded-state='false'>
          <div className='book-Url'><span className='bold'>URL:</span> {book.url}</div>
          <div className='publisher'><span className='bold'>Publisher:</span> {book.publisher}</div>
          <div className='publication-date'><span className='bold'>Publication Date:</span> {book.publicationDate}</div>
          <div className='expanded-description'><span className='bold'>Full description:</span> <p>{book.detailedDescription}</p></div>
        </div>
      </div>
    )
  }
}

export default Book
