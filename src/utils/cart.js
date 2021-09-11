const addItemToCart = (cart, cartItemToAdd) => {
    const existingCartItem = cart.find(item => item.id === cartItemToAdd.id)
    if (existingCartItem) {
        return cart.map(item =>
            item.id === cartItemToAdd.id
                ? {...cartItemToAdd, amount: item.amount + 1}
                : item,
        )
    }
    return [...cart, {...cartItemToAdd, amount: 1}]
}

const decreaseProdQtt = (cart, cartItemToDec, operator) => {
    const bookId = cartItemToDec.id

    const bookIndex = cart.findIndex(book => book.id == bookId)
    const bookOnState = cart[bookIndex]

    return operator === 'plus' ? cart.map(item =>
        item.id === bookId
            ? {...bookOnState,
                amount: bookOnState.amount +1}
            : item,
    ) :
     cart.map(item =>
        item.id === bookId
            ? {...bookOnState,
                amount: bookOnState.amount -1}
            : item,
    )

}

const removeProd = (cart, book) => {
    return cart.filter(bookState => bookState.id !== book.id)
}

export {addItemToCart, decreaseProdQtt, removeProd}
