export const ADD_TO_CART = "ADD_TO_CART" // ACTION TYPE 
export const REMOVE_FROM_CART = "REMOVE_FROM_CART" // ACTION TYPE 
export const GET_FROM_CART = "GET_FROM_CART" // ACTION TYPE 
export const UPDATE_CART = "UPDATE_CART"


/**
 * 
 * @param {*} item 
 * @returns 
 * @description add to cart action
 */
 export const addToCart = (item)=>({
    type: ADD_TO_CART,
    payload : item
}) 



export const removeFromCart = (itemName)=>({
    type: REMOVE_FROM_CART,
    payload : itemName
}) 



export const getFromCart = (payload)=>({
    type: GET_FROM_CART,
    payload,
})

export const update_cart = (payload)=>({
    type: UPDATE_CART,
    payload,
})

