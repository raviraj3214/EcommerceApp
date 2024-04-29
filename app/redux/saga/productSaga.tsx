import { put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCTS,GET_PRODUCTS_LIST,SET_PRODUCTS, SET_PRODUCTS_LIST,GET_SEARCH,SET_SEARCH,SET_LOAD_CAT,SET_LOAD_PRO } from '../productAction'
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
  try {
    if (action) {
      yield put({type:SET_LOAD_CAT, payload: true}); // Set loading to true before API call
      const category = convertToSlug(action.payload); // Convert category to slug format
      const URL = `${PRODUCTS_BY_CATEGORY}/${category}`;
      const data = yield axiosFetch(URL);

      const result = data.products.map((product) => ({
        ...product,
        image: `${process.env.SERVER_URL}api/v1/product/product-photo/${product._id}`,
      }));

      yield put({ type: SET_PRODUCTS, payload: result });
    }
  } catch (error) {
    // Handle errors if needed
    console.error('Error fetching products:', error);
    yield put({type:SET_LOAD_CAT, payload: false}); // Set loading to true before API call

  } finally {
    yield put({type:SET_LOAD_CAT, payload: false}); // Set loading to true before API call
  }
}
export function* watcherGetProducts() {
  yield takeLatest(GET_PRODUCTS,workerGetProducts)
}

export function* workerGetProductsList(action) {
  try {
    if (action) {
      // yield put(setLoading(true)); // Set loading to true before API call
      yield put({type: SET_LOAD_PRO, payload: true}); // Set loading to true before API call
      const page = action.payload;
      const URL = `${PRODUCTS_LIST}/${page}`;
      const data = yield axiosFetch(URL);
      const result = data.products.map((product) => ({
        ...product,
        image: `${process.env.SERVER_URL}api/v1/product/product-photo/${product._id}`,
      }));
      yield put({ type: SET_PRODUCTS_LIST, payload: result });
    }
  } catch (error) {
    // Handle errors if needed
    console.error('Error fetching products list:', error);
    // yield put(setLoading(false)); // Set loading to false after API call regardless of success or failure
    yield put({type:SET_LOAD_PRO, payload: false}); // Set loading to true before API call


  } finally {
    // yield put(setLoading(false)); // Set loading to false after API call regardless of success or failure
    yield put({type: SET_LOAD_PRO, payload: false}); // Set loading to true before API call

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
        image: `${process.env.SERVER_URL}api/v1/product/product-photo/${product._id}`
      }));
      const e = Object.keys(result[0]) 
      // console.warn(`data result watcher keys............................................................................................................... ${e}`);

      yield put({ type:SET_SEARCH, payload: result })
  }
}
export function* watcherGetSearch() {
  yield takeLatest(GET_SEARCH,watcherSearchProduct)
}