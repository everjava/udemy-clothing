/**
 * conteudo que estava no mapStateToProps do CartIcon  e CartDropdown
 */
import { createSelector } from "reselect";

//const selectUser = state => state.user;// = input selector = pega apenas um pedaço do state. Esse é só exemplo
const selectCart = state => state.cart;// = input selector = pega apenas um pedaço do state

/**
 * createSelector( [input selectors...] , () => retorna o valor que queremos do selector)
 */
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
