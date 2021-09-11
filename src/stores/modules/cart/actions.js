export const addProductToCart = (book) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: {
            book
        }
    }
}

export const deleteProductFromCart = (book) => {
    return {
        type: 'DEL_PRODUCT_FROM_CART',
        payload: {
            book
        },
    }
}


export const updateProductQuantityFromCart = (book, operator) => {
    return {
        type: 'UPDATE_PRODUCT_QUANTITY',
        payload: {
            book,
            operator
        },
    }
}
