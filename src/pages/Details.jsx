import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {addProductToCart} from '../stores/modules/cart/actions'
import {useDispatch} from 'react-redux'

const Details = (props) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const book = location.state.book;

    const handleAddBook = () => {
        history.push('/cart')
        dispatch(addProductToCart(book))
    }

    return (
        <div className={'container'}>
            <div className='book-container'>
                <div className='book-cover'>
                    <img src={book.image}
                         alt={`Imagem do livro ${book.title}`} />
                </div>
                <div className='book-info'>
                    <span className='book-title'>
                        {book.title}
                    </span>
                    <span className='book-price'>
                        {book.priceFormatted}
                    </span>
                    <span className='book-description'>
                        {book.description}
                    </span>
                    <button type={'button'} onClick={handleAddBook}>Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default Details
