let initialState = {
    products: []
};

export const AddEditDeleteReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_PRODUCT" : 
        return{
            state:[...state,action.payload],
        }

        case  "EDIT_UPDATE_PRODUCT" :
            const updateProduct = state.map((product)=>product.id === action.payload.id ? action.payload : product)
            state = updateProduct;
            return state;

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        
        default:
            return state;
    }
};