import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

/**
 * dispatch: se usar o metodo mapDispatchToProps nao usa esse paramentro. lesson 125
 * history: vem do withRouter
 */
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

/*
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});*/

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

/**
 * se nao colocar o segundo paramento no connect, connect vai passar o
 * dispatch vai para o atual componente como props. Neste caso nao prcisar criar mapDispatchToProps
 */
export default withRouter(connect(mapStateToProps)(CartDropdown));
