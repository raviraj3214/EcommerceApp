import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, logoutUser,updateUser } from '../redux/authAction';
import { addToCart, removeFromCart,getFromCart,update_cart,delete_cart } from '../redux/cartAction';
import { getProducts, getProductsList, getSearch } from '../redux/productAction';
import { addToWishList, removeToWishList } from '../redux/wishListAction';
export const mapStateToProps = (state) => ({
  products: state.products,
  auth: state.auth,
  cart: state.cart,
  wishList: state.wishList,
});

export const mapDispatchToProps = {
  addToCart$: addToCart,
  getFromCart$: getFromCart,
  removeFromCart$: removeFromCart,
  update_cart$: update_cart,
  delete_cart$: delete_cart,
  getProducts$: getProducts,
  addToWishList$: addToWishList,
  removeToWishList$: removeToWishList,
  getProductsList$: getProductsList,
  getSearch$: getSearch,
  loginUser$: loginUser,
  logoutUser$: logoutUser,
  updateUser$: updateUser,
};

export const hocComponentName = (WrappedComponent) => {

  const hocComponent = ({ ...props }) => {
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (ReduxWrapper) =>
  connect(mapStateToProps, mapDispatchToProps)(hocComponentName(ReduxWrapper));
