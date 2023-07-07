import CartActionTypes from "./action-types";

const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

const removeProductToCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

const increaseProductToCart = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payload,
});

const decreaseProductToCart = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
});

export {
  addProductToCart,
  removeProductToCart,
  decreaseProductToCart,
  increaseProductToCart,
};
