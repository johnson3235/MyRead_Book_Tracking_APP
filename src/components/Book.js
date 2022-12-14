import React from 'react'
import PropTypes from 'prop-types'
import noThumbnailImage from '../icons/no_cover_thumb.gif'

// Stateless functional component is used as we are using only render method.
const Book = (props) => {
    const {book,onChangeShelf} = props
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                             style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noThumbnailImage})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(event) => onChangeShelf(book,event.target.value)}
                                value={book.shelf ? book.shelf : 'none'}>
                                <option value="moveTo" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Remove</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title ? book.title : null}</div>
                    { 
                        book.authors &&
                        book.authors.map((author,index) =>(
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
            </div>
        </li>
    )
}


Book.PropTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book