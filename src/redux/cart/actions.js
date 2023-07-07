import CartActionTypes from "./action-types";

const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

const removeProductToCart = () => {};

export { addProductToCart, removeProductToCart };
