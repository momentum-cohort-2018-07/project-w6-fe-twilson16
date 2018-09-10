import React, {
  Component
} from 'react'
// import App from './App.js'

class AddBookView extends Component {
  constructor (props) {
    super()
  }

  render () {
    // const { book } = this.props
    return (
      <div className='add-info-div'>
        <div className='book-title-add'><span className='bold'>Title:</span><input type='text' className='title-add' /></div>
        <div className='book-cover-add'><input type='image' /></div>
        <div className='author-add'><span className='bold'>Author:</span><input type='text' className='author-add' /></div>
        <div className='short-description-add'><span className='bold'>Short Description:</span><input type='text' className='shortDescription-add' /></div>
        <div className='publisher-add'><span className='bold'>Publisher:</span> <input type='text' className='publisher-add' /></div>
        <div className='publication-date-add'><span className='bold'>Publication Date:</span> <input type='text' className='publicationDate-add' /></div>
        <div className='expanded-description-eadd'><span className='bold'>Full description:</span> <input type='text' className='detailedDescription-add' /></div>
        <div className='add'><button className='add-button'>Add Book</button></div>
      </div>
    )
  }
}

export default AddBookView
