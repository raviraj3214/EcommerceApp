export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCTS="SET_PRODUCTS"

export const GET_PRODUCTS_LIST="GET_PRODUCTS_LIST"
export const SET_PRODUCTS_LIST="SET_PRODUCTS_LIST"
export const GET_SEARCH = "GET_SEARCH"
export const SET_SEARCH = "SET_SEARCH"

export const getProducts = (payload)=>({
    type: GET_PRODUCTS,
    payload
}) 


export const getProductsList = (payload)=>({
    type: GET_PRODUCTS_LIST,
    payload
}) 

export const getSearch = (payload)=>({
    type: GET_SEARCH,
    payload
})

