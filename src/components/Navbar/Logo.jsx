import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


const NumberCartItems = (props) => {
    const history = useHistory()

    return (
        <span className={'logo'} onClick={() => history.push('/')}>
            Zap do Código
        </span>
    )
}

export default NumberCartItems
