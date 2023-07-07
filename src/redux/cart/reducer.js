import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // verificar se prod já esta no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
 
      // se estiver, aumentar a quantidade em um
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      // se nao estiver, adicionar prod
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    // return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
