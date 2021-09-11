import React, {useEffect, useState} from 'react'
import api from '../services/api'
import {formatPrice} from '../utils'
import {addProductToCart} from '../stores/modules/cart/actions'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Home = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [books, setBooks] = useState([])

    const handleGetBooks = async () => {
        try {
            const response = await api.get('/books')
            const responseFormatted = response.data.map(book => {
                return {
                    ...book,
                    priceFormatted: formatPrice(book.price),
                }
            })
            setBooks(responseFormatted)

        } catch (e) {
            console.log(`Houve um erro: ${e.message}`)
        }
    }

    const handleRedirectDetails = (book) => {
        history.push('/details', {book})
    }

    useEffect(() => {
        handleGetBooks()
    }, [])

    return (
        <div className={'container'}>
            <div className='content-books'>
                {
                    books.map(book => (
                        <div className={'card-book'} key={book.id}>
                            <img src={book.image} alt={`Imagem livro ${book.title}`}/>
                            <span className={'card-book-title'}>{book.title}</span>
                            <span className={'card-book-price'} >{book.priceFormatted}</span>
                            <button type={'button'} onClick={() => handleRedirectDetails(book)}>Detalhes</button>
                            <button type={'button'} onClick={() => dispatch(addProductToCart(book))}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
