import CartActionTypes from "./action-types";

const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

const removeProductToCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload
})

export { addProductToCart, removeProductToCart };
