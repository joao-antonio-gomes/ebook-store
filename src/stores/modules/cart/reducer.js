import {addItemToCart, decreaseProdQtt, removeProd} from '../../../utils/cart'

const INITIAL_STATE = {
    items: [],
    total_carrinho: 0,
}

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART': {
            const {book} = action.payload
            return {
                ...state,
                items: addItemToCart(state.items, book),
                total_carrinho: state.total_carrinho + book.price,
            }
        }
        case 'UPDATE_PRODUCT_QUANTITY': {
            const {book, operator} = action.payload
            const total = operator === 'minus' ?
                state.total_carrinho - action.payload.book.price :
                state.total_carrinho + action.payload.book.price

            return {
                ...state,
                items: decreaseProdQtt(state.items, book, operator),
                total_carrinho: total
            }
        }
        case 'DEL_PRODUCT_FROM_CART': {
            const {book} = action.payload
            let total = (state.total_carrinho - (book.amount * book.price))
            return {
                ...state,
                items: removeProd(state.items, book),
                total_carrinho: total
            }
        }
        default:
            return state
    }
}

export default cart
