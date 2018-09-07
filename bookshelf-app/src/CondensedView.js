import React, {
  Component
} from 'react'

class CondensedView extends Component {
  constructor (props) {
    super()
    this.state = {
      expanded: false
    }
  }

  render () {
    const book = this.props
    return (
      <div className='whole-book-div' key={this.props.idx} >
        <div className='collpased-info-div' >
          <div className='book-cover' > <img className='book-image' src={book.coverImageUrl} alt='Book Cover' /> </div> <div className='book-title' > <span className='bold' > Title: </span> {book.title}</div >
          <div className='author' > <span className='bold' > Author: </span> {book.author}</div >
          <div className='short-description' > <span className='bold' > Short Description: </span> {book.shortDescription}</div >
          <div className='button-div'><button className='expand-button' onClick={() => this.setState({expanded: true})}> More Information </button></div >
        </div> </div>
    )
  }
}

export default CondensedView
