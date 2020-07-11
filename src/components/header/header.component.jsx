import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect'
import { selectCarHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
 
  // console.log(currentUser)
  return (
    <div className="header">
      <Link className="logo-container" to="#">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
      
    </div>
  );
};
/*
 const mapStateToProps = (state) =>({
  currentUser: state.user.currentUser
 })*/

//Pega o 'currentUser' de 'user', pega 'hidden'de 'cart'
/*const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
*/
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser ,
  hidden: selectCarHidden 
})

export default connect(mapStateToProps)(Header);
