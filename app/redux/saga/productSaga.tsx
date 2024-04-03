import { put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCTS,GET_PRODUCTS_LIST,SET_PRODUCTS, SET_PRODUCTS_LIST,GET_SEARCH,SET_SEARCH } from '../productAction'
import RequestMake from '../../utils/RequestMake'
import {axiosFetch,axiosFetchAll} from '../../utils/AxiosRequest'
import {PRODUCTS_BY_CATEGORY, PRODUCTS_LIST,SEARCH} from '../../utils/ApiList'
function convertToSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters (except spaces and dashes)
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .trim(); // Trim leading and trailing spaces
}
export function* workerGetProducts(action) {
  if (action) {
      const category = convertToSlug(action.payload); // Convert category to slug format
      const URL=`${PRODUCTS_BY_CATEGORY}/${category}`
      const data = yield axiosFetch(URL)
       
      const result = data.products.map(product => ({
        ...product,
        image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
      }));  
      // console.log('Type of result',  result);

      // console.log('Type of data.products:',  data.products);

      yield put({ type:SET_PRODUCTS, payload: result })
  }
}
export function* watcherGetProducts() {
  yield takeLatest(GET_PRODUCTS,workerGetProducts)
}



export function* workerGetProductsList(action) {
  if (action) {
      const page = action.payload;
      const URL=`${PRODUCTS_LIST}/${page}`
      // console.log({URL});
      const data = yield axiosFetch(URL)      
      // console.warn(`data products ${data.products}`);
      const result = data.products.map(product => ({
        ...product,
        image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
      }));
      yield put({ type:SET_PRODUCTS_LIST, payload: result })
  }
}
export function* watcherGetProductsList() {
  yield takeLatest(GET_PRODUCTS_LIST,workerGetProductsList)
}


export function* watcherSearchProduct(action) {
  if (action) {
      const product =action.payload
      // console.log("search key...................................................",product)
      const URL=`${SEARCH}/${product}`
    //  console.log({URL});
      const res = yield axiosFetchAll(URL)  
      const d = Object.keys(res) 
      // console.warn(`data products watcher length............................................................................................................... ${d}`);
      // console.warn(`data products............................................................................................................... ${res.data}`);
      const result = res.map(product => ({
        ...product,
        image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
      }));
      const e = Object.keys(result[0]) 
      // console.warn(`data result watcher keys............................................................................................................... ${e}`);

      yield put({ type:SET_SEARCH, payload: result })
  }
}
export function* watcherGetSearch() {
  yield takeLatest(GET_SEARCH,watcherSearchProduct)
}