import axios from "axios"

// For getting single Product in user page and Admin Page
export const fetchProductsSuccess = (product) => {
    return {
        type: "PRODUCT_SUCCESS",
        payload: product
    }
};

export const fetchProductsFailure = (error) => {
    return {
        type: "PRODUCT_FAILURE",
        payload: error
    }
};


export const fetchProduct = (id) => {
    return function (dispatch) {
        axios.get(`https://products-9fsh.onrender.com/products/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(fetchProductsSuccess(response.data))
                }
                else {
                    dispatch(fetchProductsSuccess(response.statusMessage))
                }
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            })
    }
}


// For adding in WishList

export const addToWishlist = (productId) => ({
    type: "ADD_TO_WISHLIST",
    payload: productId,
});

// For removing from WishList
export const removeFromWishlist = (productId) => ({
    type: "REMOVE_FROM_WISHLIST",
    payload: productId,
});


// For Delteing Entire Cart
export const clearCart = () => ({
    type: "CLEAR_CART"
});

// For Add item to cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    }
}



// For Delete item to cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product,
    }
}

// For Error Message when user tries to increase the qunatity beyond original quantity
export const setErrorMessage = (message) => ({
    type: "SET_ERROR_MESSAGE",
    payload: message
});


export const updateCartItemQuantity = (productId, newQuantity) => ({
    type: "UPDATE_CART_ITEM_QUANTITY",
    payload: { productId, newQuantity }
});


// For Inrementing the Quantity of item
export const incrementQuantity = (productId) => ({
    type: "INCREMENT_QUANTITY",
    payload: productId
});

// For Derementing the Quantity of item
export const decrementQuantity = (productId) => ({
    type: "DECREMENT_QUANTITY",
    payload: productId
});




// For Getting Product List in Admin Homepage and UserPage
export const fetchProductSuccess = (products) => {
    return {
        type: "FECTH_PRODUCTS_SUCCESS",
        payload: products,
    }
}
export const fetchProductFailure = (error) => {
    return {
        type: "FECTH_PRODUCTS_Failure",
        payload: error,
    }
}

export const fetchProducts = () => {
    return function (dispatch) {
        axios.get("https://products-9fsh.onrender.com/products")
            .then((response) => {
                if (response.status === 200) {
                    dispatch(fetchProductSuccess(response.data))
                }
                else {
                    dispatch(fetchProductSuccess(response.statusMessage))
                }
            })
            .catch((error) => {
                dispatch(fetchProductFailure(error.message));
            })
    }
}




// For deleting particular product in productlist in admin page

export const DeleteProducts = (productId) => {
    return function (dispatch) {
        axios.delete(`https://products-9fsh.onrender.com/products/${productId}`)
            .then(() => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    payload: productId
                })
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            })
    }
}


// For adding particular product in productlist in admin page

export const AddingProducts = (data) => {
    return function (dispatch) {
        axios.post(`https://products-9fsh.onrender.com/products`, data)
            .then(() => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: data
                })
            })
            .catch((error) => {
                console.error("Error Adding product:", error);
            })
    }
}


// For editing and updating particular product in productlist in admin page

export const EditProducts = (data, id) => {
    return function (dispatch) {
        axios.put(`https://products-9fsh.onrender.com/products/${id}`, data)
            .then(() => {
                dispatch({
                    type: "EDIT_UPDATE_PRODUCT",
                    payload: data
                })
            })
            .catch((error) => {
                console.error("Error Adding product:", error);
            })
    }
}

