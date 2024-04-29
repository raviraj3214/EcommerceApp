export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCTS="SET_PRODUCTS"

export const GET_PRODUCTS_LIST="GET_PRODUCTS_LIST"
export const SET_PRODUCTS_LIST="SET_PRODUCTS_LIST"
export const GET_SEARCH = "GET_SEARCH"
export const SET_SEARCH = "SET_SEARCH"
export const SET_LOAD_PRO = 'SET_LOAD_PRO';
export const SET_LOAD_CAT = 'SET_LOAD_CAT';


export const setLoadPro = (payload) => ({
  type: SET_LOAD_PRO,
  payload,
});
export const setLoadCat = (payload) => ({
    type: SET_LOAD_CAT,
    payload,
  });

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

