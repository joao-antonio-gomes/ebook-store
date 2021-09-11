import React from 'react'
import InfoCarrinho from './InfoCarrinho'
import {useHistory} from 'react-router-dom'
import Logo from './Logo'

const Header = (props) => {
    return (
        <div className={'nav'}>
            <div className='container '>
                <Logo />
                <InfoCarrinho/>
            </div>
        </div>
    )
}

export default Header
