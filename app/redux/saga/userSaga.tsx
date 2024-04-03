// import { put, takeLatest } from 'redux-saga/effects'
// import { LOGIN,LOG_OUT, } from '../authAction'
// import {axiosFetch,axiosFetchAll} from '../../utils/AxiosRequest'
// import {LOGIN} from '../../utils/ApiList'

// export function* workerGetLogin(action) {
//     if (action) {
//         const category = convertToSlug(action.payload); // Convert category to slug format
//         const URL=`${LOGIN}`
//         const data = yield axiosFetch(URL)
         
//         const result = data.products.map(product => ({
//           ...product,
//           image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
//         }));  
//         // console.log('Type of result',  result);
  
//         // console.log('Type of data.products:',  data.products);
  
//         yield put({ type:SET_PRODUCTS, payload: result })
//     }
//   }
//   export function* watcherGetProducts() {
//     yield takeLatest(GET_PRODUCTS,workerGetProducts)
//   }
  
  
  
//   export function* workerGetProductsList(action) {
//     if (action) {
//         const page = action.payload;
//         const URL=`${PRODUCTS_LIST}/${page}`
//         // console.log({URL});
//         const data = yield axiosFetch(URL)      
//         // console.warn(`data products ${data.products}`);
//         const result = data.products.map(product => ({
//           ...product,
//           image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
//         }));
//         yield put({ type:SET_PRODUCTS_LIST, payload: result })
//     }
//   }
//   export function* watcherGetProductsList() {
//     yield takeLatest(GET_PRODUCTS_LIST,workerGetProductsList)
//   }
  
  
//   export function* watcherSearchProduct(action) {
//     if (action) {
//         const product =action.payload
//         // console.log("search key...................................................",product)
//         const URL=`${SEARCH}/${product}`
//       //  console.log({URL});
//         const res = yield axiosFetchAll(URL)  
//         const d = Object.keys(res) 
//         // console.warn(`data products watcher length............................................................................................................... ${d}`);
//         // console.warn(`data products............................................................................................................... ${res.data}`);
//         const result = res.map(product => ({
//           ...product,
//           image: `https://api.raviecom.site/api/v1/product/product-photo/${product._id}`
//         }));
//         const e = Object.keys(result[0]) 
//         // console.warn(`data result watcher keys............................................................................................................... ${e}`);
  
//         yield put({ type:SET_SEARCH, payload: result })
//     }
//   }
//   export function* watcherGetSearch() {
//     yield takeLatest(GET_SEARCH,watcherSearchProduct)
//   }