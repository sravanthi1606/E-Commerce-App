let initialState = {
    products :[],
    error : "",
};

export const ProductReducer = (state=initialState,action)=>{
    if(action.type === "FECTH_PRODUCTS_SUCCESS"){
        return {
            products : action.payload,
            error:""
        }
    }

    else if(action.type === "FECTH_PRODUCTS_FAILURE"){
        return {
            products : [],
            error:action.payload,
        }
    }
    return state;
}




// export const DeleteReducer = (state = initialState,action)=>{
//     switch(action.type){
//         case  "DELETE_PRODUCT":
//             return {
//                 ...state,products:state.products.filter(product => product.id !== action.paylaod)
//             };
//             default:
//                 return state;
//     }
// }

