import React, {
  Component
} from 'react'
// import Book from './book.js'
// import App from './App.js'

class EditingView extends Component {
  constructor (props) {
    super()
  }

  render () {
    const { book } = this.props.book
    const bookId = this.props.book.id
    return (
      <div className='edit-info-div'>
        <div className='book-title-edit'><span className='bold'>Title:</span><input type='text' className='title-input' value={book.title} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        <div className='book-cover-edit'><img className='book-image' src={book.coverImageUrl} alt='Book Cover' /></div>
        <div className='author-edit'><span className='bold'>Author:</span><input type='text' className='author-input' value={book.author} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        <div className='short-description-edit'><span className='bold'>Short Description:</span><input type='text' className='shortDescription-input' value={book.shortDescription} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        <div className='publisher-edit'><span className='bold'>Publisher:</span> <input type='text' className='publisher-input' value={book.publisher} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        <div className='publication-date-edit'><span className='bold'>Publication Date:</span> <input type='text' className='publicationDate-input' value={book.publicationDate} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        <div className='expanded-description-edit '><span className='bold'>Full description:</span> <input type='text' className='detailedDescription-input' value={book.detailedDescription} onChange={(e) => {
          this.props.updateBook(e, book, bookId)
        }} /></div>
        {/* <div className='back'><button className='back-button' onClick={(e) => <Book book={this.state.book} />}>Back</button></div> */}
        <div className='save'><button className='save-button'>Save</button></div>

      </div>
    )
  }
}

export default EditingView
