import React from "react";
import "./App.css";
//import { hot } from "react-hot-loader";
import { Homepage } from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from './pages/checkout/checkout.component'


class App extends React.Component {
  /*comentado apos adicionar o redux
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  */
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      //createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //get snapshot of data
          /*this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          comentado codigo acima e adiconado  this.props.setCurrentUser apos add redux
          */
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        //this.setState({ currentUser: userAuth }); comentado apos adicionar o redux
        setCurrentUser(userAuth);
      }
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
/*
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
