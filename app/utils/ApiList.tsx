export const BASE_URL="https://api.raviecom.site/"
// export const BASE_URL="http://localhost:8080/"
// const BASE_URL="https://ecom-apis-gfls.onrender.com/"
export const PRODUCTS_BY_CATEGORY=`${BASE_URL}api/v1/product/product-category` 
export const PRODUCTS_LIST=`${BASE_URL}api/v1/product/product-list` //jewelery
export const SEARCH=`${BASE_URL}api/v1/product/search`
export const LOGIN=`${BASE_URL}api/v1/auth/login`
// export const PRODUCTS_LIST = async () => {
//     try {
//       const response = await axios.get(`https://api.raviecom.site/api/v1/product/product-list/${1}`);
//       const productslist = response.data.products; // Store the fetched data
//       return productslist; // Return the stored data
//     } catch (error) {
//       console.error("Error fetching product list:", error);
//       return null;
//     }
//   };
