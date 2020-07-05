import React from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { Homepage } from "./pages/homepage.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";
 

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default hot(module)(App);
