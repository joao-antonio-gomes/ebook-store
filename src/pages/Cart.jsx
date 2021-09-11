import React, {useEffect, useState} from 'react'
import api from '../services/api'
import {useDispatch, useSelector} from 'react-redux'
import {formatPrice} from '../utils'
import {deleteProductFromCart, updateProductQuantityFromCart} from '../stores/modules/cart/actions'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Cart = (props) => {
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const total = useSelector(state => state.cart.total_carrinho)
    const totalFormatado = formatPrice(total.toFixed(2))

    return (
        <div className={'container'}>
            <table className={'table-cart'}>
                <thead>
                <tr>
                    <th></th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Subtotal</th>
                    <th>Remover</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map(book => (
                        <tr key={book.id}>
                            <td>
                                <img src={book.image}
                                     className={'table-image'}
                                     alt={`Imagem do livro ${book.title}`} />
                            </td>
                            <td>
                                {book.title}
                            </td>
                            <td className={'table-quantidade-item'}>
                                <div>
                                    {book.amount > 1 &&
                                    <a onClick={() => dispatch(updateProductQuantityFromCart(book, 'minus'))}>
                                        <RemoveIcon className={'table-button-qtt'} />
                                    </a>
                                    }
                                    {book.amount == 1 &&
                                    <div className={'btn-vazio'}></div>
                                    }
                                </div>
                                <div>
                                    {book.amount}
                                </div>
                                <div>
                                    <a onClick={() => dispatch(updateProductQuantityFromCart(book, 'plus'))}>
                                        <AddIcon className={'table-button-qtt'} />
                                    </a>
                                </div>
                            </td>
                            <td>
                                {book.priceFormatted}
                            </td>
                            <td>
                                {
                                    formatPrice((book.price * book.amount).toFixed(2))
                                }
                            </td>
                            <td className="remove-icon">
                                <DeleteForeverOutlinedIcon onClick={() => dispatch(deleteProductFromCart(book))}/>
                            </td>
                        </tr>
                    ))
                }
                <tr className={'table-total'}>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>{totalFormatado}</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Cart
