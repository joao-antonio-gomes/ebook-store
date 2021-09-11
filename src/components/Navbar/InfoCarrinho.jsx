import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {ShoppingCartOutlined} from '@material-ui/icons'
import {formatPrice} from '../../utils'


const InfoCarrinho = (props) => {
    const history = useHistory()
    const quantidade = useSelector(state => state.cart.items.length)
    const total = useSelector(state => state.cart.total_carrinho)
    const totalFormatado = formatPrice(total.toFixed(2))

    return (
        <span className={'info-carrinho'}
              onClick={() => history.push('/cart')}>
            <div className={'qtd-produtos'}>
                <ShoppingCartOutlined />
                {quantidade} produto{(quantidade > 1 || quantidade === 0) && 's'}
            </div>
            <div className='borda'></div>
            <div>
                {totalFormatado}
            </div>
        </span>
    )
}

export default InfoCarrinho
