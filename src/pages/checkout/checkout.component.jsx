import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import './checkout.styles.scss';
import CheckoutItem  from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

/**
 * no exemplo original nao usa 'return'
 */
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
    </div>
    { cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))  }
    <div className='total'>TOTAL: ${total}</div>
    <StripeCheckoutButton  price={total} />
    <span>
      {/** https://stripe.com/docs/testing#cards **/}
     <h3>4242 4242 4242 4242 - exp: 01/21 - cw: 123 </h3>
    </span>
  </div>
      
  );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

 


export default connect(mapStateToProps) (CheckoutPage);
