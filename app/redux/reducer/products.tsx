// import { SET_PRODUCTS_LIST, SET_PRODUCTS } from "../productAction"; // Correct import statements for action types

// const initialState = {
//     products: [], // Can be multiple
//     catproducts: [],
// }

// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case SET_PRODUCTS_LIST:
//             return {
//                 ...state,
//                 products: payload
//             };
//         case SET_PRODUCTS:
//             return {
//                 ...state,
//                 catproducts: payload
//             };
//         case "ANY_CASE":
//             return { ...state };
//         default:
//             return state; // No need to spread state if there's no change
//     }
// };
import { SET_PRODUCTS_LIST, SET_PRODUCTS,SET_SEARCH } from "../productAction"; // Correct import statements for action types

const initialState = {
    products: [], // Can be multiple
    catproducts: [],
    searchproducts: [],
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    const t = Object.keys(state);
    console.log("here is the keys", t);
    console.log("here is the new actions", type);
    

    switch (type) {
        case SET_PRODUCTS_LIST:
            // console.log("New state after SET_PRODUCTS_LIST:", payload);
            if(state.products.length>=59){
                return {...state};
            }
            return {
                ...state,
                products: [...state.products, ...payload]
            };
        case SET_PRODUCTS:
            // console.log("New state after SET_PRODUCTS:",  payload);
            return {
                ...state,
                catproducts: payload
            };
        case SET_SEARCH:
            //  console.log("New state after SET_PRODUCTS:",  payload);
             return{
                ...state,
                searchproducts: payload
             };

        case "ANY_CASE":
            return { ...state };
        default:
            console.log("New state:", state); // Log the state whenever any other action is dispatched
            return state; // No need to spread state if there's no change
    }
};
