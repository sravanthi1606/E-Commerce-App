let initialState = {
    products: []
};

export const AddEditDeleteReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_PRODUCT" : 
        // return{
        //     state:[...state,action.payload],
        // }

        return {
            ...state,
            products: [...state.products, action.payload]
        };

        // case  "EDIT_UPDATE_PRODUCT" :
        //     const updateProduct = state.map((product)=>product.id === action.payload.id ? action.payload : product)
        //     state = updateProduct;
        //     return state;


        case "EDIT_UPDATE_PRODUCT":
            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );
            return {
                ...state,
                products: updatedProducts
            };

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        
        default:
            return state;
    }
};


// https://e-commerce-app-pearl-one.vercel.app/db.json